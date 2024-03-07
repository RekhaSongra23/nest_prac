import { SetMetadata } from "@nestjs/common";
import { UserRole } from "src/user/userdto";

export const UserRoles=(...roles:UserRole[])=>SetMetadata('roles',roles);