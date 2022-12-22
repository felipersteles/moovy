export class CreateUserDto {
  username: string;
  email: string;
  password: string;
  superuser?: boolean;
}

// DTO significa Data Transfer Object
// serve para converter do corpo da req para uma classe definida
