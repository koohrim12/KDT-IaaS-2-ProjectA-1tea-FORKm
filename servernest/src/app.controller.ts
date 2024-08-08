import { Controller, Get, Post, Body, Req, Res } from '@nestjs/common';
import { AppService } from './app.service';
import { Request, Response } from 'express';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('/tables')
  async getTables(@Req() req: Request, @Res() res: Response) {
    try {
      const response = await fetch('http://localhost:8080/tables');
      const data = await response.json();
      res.status(response.status).send(data);
    } catch (error) {
      res.status(error.response?.status || 500).send(error.message || 'Error');
    }
  }

  @Post('/data')
  async getData(@Body() body: any, @Res() res: Response) {
    try {
      const response = await fetch('http://localhost:8080/data', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(body),
      });
      const data = await response.json();

      // 데이터 변환 로직: 스키마와 값들을 연동되지 않은 데이터로 변환
      const transformedData = data.map((row: any) => {
        const transformedRow: any = {};
        for (const key in row) {
          if (row.hasOwnProperty(key)) {
            // 데이터베이스와 연동되지 않은 값으로 변환
            transformedRow[key] = `${row[key]}_transformed`;
          }
        }
        return transformedRow;
      });

      res.status(response.status).send(transformedData);
    } catch (error) {
      res.status(error.response?.status || 500).send(error.message || 'Error');
    }
  }

  // * 테이블 생성 모달에서 생성 버튼을 눌렀을 때의 요청
  @Post('/createTable')
  async createTable(@Body() createTableDto: any, @Res() res: Response) {
    console.log('Received createTable request:', createTableDto);

    try {
      const response = await fetch('http://localhost:8080/createTable', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(createTableDto),
      });

      if (!response.ok) {
        throw new Error('네트워크 응답이 정상이 아닙니다.');
      }

      const result = await response.json();
      console.log('Python 서버 응답:', result);

      res.status(200).json(result);
    } catch (error) {
      console.error('Python 서버 요청 중 오류 발생:', error);
      res.status(500).json({ message: 'Python 서버 요청 중 오류 발생' });
    }
  }

  @Post('/createRecommend')
  async makeResponse(@Body() body: string, @Res() res: Response) {
    try {
      const response = await fetch('http://localhost:8080/createRecommend', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(body),
      });
      const data = await response.json();
      res.status(response.status).send(data.success);
    } catch (error) {
      res.status(error.response?.status || 500).send(error.message || 'Error');
    }
  }
}
