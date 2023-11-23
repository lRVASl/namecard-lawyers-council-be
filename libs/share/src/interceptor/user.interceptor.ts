import {
  Injectable,
  NestInterceptor,
  ExecutionContext,
  CallHandler,
  ForbiddenException,
} from '@nestjs/common';
import * as JWT from 'jsonwebtoken';
import { Observable } from 'rxjs';

@Injectable()
export class UserInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    const request = context.switchToHttp().getRequest();
    const token = request.headers['authorization'];
    if (token) {
      request.body['sub'] = JSON.parse(
        Buffer.from(token.split('.')[1], 'base64').toString(),
      ).sub;
    } else {
      throw new ForbiddenException('No Auth');
      return;
    }
    return next.handle();
  }
}

function verifyToken(bearerToken: string) {
  const id24TokenPublicKeyBase64 = process.env['ID24_TOKEN_PUBLIC_KEY'];
  // console.log(id24TokenPublicKeyBase64);
  const id24TokenPublicKey = Buffer.from(
    id24TokenPublicKeyBase64,
    'base64',
  ).toString('ascii');
  const token = bearerToken.replace('Bearer ', '');
  // console.log('token:', token, 'bearerToken:', bearerToken);
  try {
    JWT.verify(token, id24TokenPublicKey, {
      algorithms: ['RS256'],
    });
  } catch (e) {
    throw new ForbiddenException(e.message);
    //console.log(e);
  }
}
