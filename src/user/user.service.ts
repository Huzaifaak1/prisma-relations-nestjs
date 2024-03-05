import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class UserService {
  constructor(private prisma: PrismaService) {}
  async registerUser() {
    const usersData = [
      { fName: 'John', lName: 'Doe', contact: '+1234567890' },
      { fName: 'Jane', lName: 'Smith', contact: '+1987654321' },
      { fName: 'Michael', lName: 'Johnson', contact: '+1122334455' },
      { fName: 'Emily', lName: 'Brown', contact: '+1555666777' },
      { fName: 'David', lName: 'Martinez', contact: '+1888888888' },
      { fName: 'Sarah', lName: 'Anderson', contact: '+1777777777' },
      { fName: 'Daniel', lName: 'Taylor', contact: '+1666666666' },
      { fName: 'Jessica', lName: 'Wilson', contact: '+1444444444' },
      { fName: 'Christopher', lName: 'Lopez', contact: '+1333333333' },
      { fName: 'Amanda', lName: 'Hernandez', contact: '+1222222222' },
    ];

    for (const userData of usersData) {
      await this.prisma.user.create({
        data: userData,
      });
    }
  }

  getUsers() {
    return this.prisma.user.findMany({
        where:{
            fName : {
                startsWith:"Jo"
            }
        }
    })
  }
}
