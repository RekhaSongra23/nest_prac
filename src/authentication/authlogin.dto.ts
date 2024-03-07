import { IsNotEmpty,} from "@nestjs/class-validator";
import { Prop } from "@nestjs/mongoose";

export class authLoginDto {
  @Prop()
  @IsNotEmpty()
  username: string;

  @Prop()
  @IsNotEmpty()
  password: string;
}