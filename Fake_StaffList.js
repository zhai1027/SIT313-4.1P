import { faker } from '@faker-js/faker'
const staffList =[
    {   
        "key": 0,
        "avatar" : faker.image.avatar(),
        "name" : faker.name.firstName() + " " + faker.name.lastName(),
        "position" : faker.name.jobTitle(),
        "location": faker.random.locale(),
        "number": faker.phone.phoneNumber(),
    },
    {   
        "key": 1,
        "avatar" : faker.image.avatar(),
        "name" : faker.name.firstName() + " " + faker.name.lastName(),
        "position" : faker.name.jobTitle(),
        "location": faker.random.locale(),
        "number": faker.phone.phoneNumber(),
    },
    {   
        "key": 2,
        "avatar" : faker.image.avatar(),
        "name" : faker.name.firstName() + " " + faker.name.lastName(),
        "position" : faker.name.jobTitle(),
        "location": faker.random.locale(),
        "number": faker.phone.phoneNumber(),
    },
    {   
        "key": 3,
        "avatar" : faker.image.avatar(),
        "name" : faker.name.firstName() + " " + faker.name.lastName(),
        "position" : faker.name.jobTitle(),
        "location": faker.random.locale(),
        "number": faker.phone.phoneNumber(),
      },
      {   
        "key": 4,
        "avatar" : faker.image.avatar(),
        "name" : faker.name.firstName() + " " + faker.name.lastName(),
        "position" : faker.name.jobTitle(),
        "location": faker.random.locale(),
        "number": faker.phone.phoneNumber(),
    }
]

export default staffList