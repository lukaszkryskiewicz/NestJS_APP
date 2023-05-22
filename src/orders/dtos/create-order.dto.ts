import { Length, IsString, IsNotEmpty, IsUUID } from 'class-validator';

export class CreateOrderDTO {
  @IsNotEmpty()
  @IsString()
  @Length(10, 30)
  client: string;

  @IsUUID()
  @IsNotEmpty()
  @IsString()
  productId: string;

  @IsNotEmpty()
  @IsString()
  @Length(10, 50)
  address: string;
}
