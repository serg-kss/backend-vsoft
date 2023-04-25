import { Body, Controller, Get, Post } from '@nestjs/common';
import { OAuth2Client } from 'google-auth-library';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { IUser } from './interfaces/user';


const oauth2Client = new OAuth2Client(
  process.env.GOOGLE_CLIENT_ID,
  process.env.GOOGLE_CLIENT_SECRET);


@Controller('/users')
export class UsersController {
   constructor(public userService: UsersService){}

   @Post('/login')
   async login(@Body('token') token): Promise<any> {
    const ticket = await oauth2Client.verifyIdToken({
      idToken: token,
      audience: process.env.GOOGLE_CLIENT_ID
    })

    let users: IUser[]= await this.userService.findAll();
    let index = 0;

    if (users.length!=0) {
      for (let i = 0; i < users.length; i++) {
        if (ticket.getPayload().email!=users[i].email) {
          index +=1;
        }     
      }

      if (index==(users.length)) {
        const createUserDto: CreateUserDto = {
          email: ticket.getPayload().email,
          name: ticket.getPayload().given_name,
          surname: ticket.getPayload().family_name,
          picture: ticket.getPayload().picture
        }
        this.userService.create(createUserDto);
        index = 0;
      }      
    }else if(users.length==0){
      const createUserDto: CreateUserDto = {
        email: ticket.getPayload().email,
        name: ticket.getPayload().given_name,
        surname: ticket.getPayload().family_name,
        picture: ticket.getPayload().picture
      }
      this.userService.create(createUserDto);
      index = 0;
    }
    
    return {
      email_verified: ticket.getPayload().email_verified,
      email: ticket.getPayload().email,
      name: ticket.getPayload().given_name,
      family_name: ticket.getPayload().family_name,
      picture: ticket.getPayload().picture,
    }
   }

   @Get()
   getAll(){
     return this.userService.findAll();
   }
}
