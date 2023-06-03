import { Controller, Post, Body } from '@nestjs/common';
import { ReserveService } from './reserve.service';
import { ReserveDto } from './reserve.dto';
import { ApiBody, ApiResponse } from '@nestjs/swagger';
import { RentCarService } from '@src/rentcar/rentcar.service';

@Controller('reserve')
export class ReserveController {
  constructor(
    private readonly reserveService: ReserveService,
    private rentCarService: RentCarService,
  ) {}
  @Post('/reserve')
  @ApiBody({ type: ReserveDto })
  @ApiResponse({
    status: 200,
    description: 'reserve state',
    schema: {
      example: { status: 'reserve success' },
    },
  })
  @ApiResponse({
    status: 400,
    description: 'Invalid input',
  })
  async reserve(@Body() reserveDto: ReserveDto) {
    const newReserve = await this.reserveService.createReserve(reserveDto);
    console.log(newReserve);
    const updatedRenterCar = await this.rentCarService.updateRentCar(
      newReserve,
    );
    return { updatedRenterCar, newReserve };
  }
  @Post('/return')
  @ApiBody({ type: ReserveDto })
  @ApiResponse({
    status: 200,
    description: 'return state',
    schema: {
      example: { status: 'return success' },
    },
  })
  @ApiResponse({
    status: 400,
    description: 'Invalid input',
  })
  async returnReserve(@Body() returnReserveDto: ReserveDto) {
    const deletedReserve = await this.reserveService.returnReserve(
      returnReserveDto,
    );

    /*
      // 0. req로 들어온 거 가지고 reserve 지워버리기
      // 1. 번호판 (위에 있음, req임) 이걸 가지고 렌트카를 찾아야해
      // Rentcar에서 번호판 가지고 찾는 로직을 만들어
      // const rentcar = rentcarService.findByNumber()
      // 2. 렌트카에서 차 이름을 찾아야해
      // const carModel = carmodeService.findByName(rentcar.name)
      // 3. 차 이름을 가지고 카모델에서 하루 대여비를 찾아야해 
      // 4. 방금 막 찾은 따끈따끈 하루 대여비 + req로 날아온 기간 합쳐서 update PReve rental
      // await previousUpdate(carModel.money, start, end)
    */

    return { deletedReserve };
  }

  //
  //
  //
  //

  // 1. rentcar 의 날짜 업데이트
  // 2. reserve 데이터 insert

  // RESTFUL API
  // 1. 엔드포인트 그 자체로 어떤 기능을 하는지 알아야한다
  // 2. METHOD도 해당 기능을 보여주는 재료다
  // 3. 따라서 엔드포인트 PATH와 METHOD의 명세가 겹치면 안된다.
  // 4. GET : /get_all_rentcar <- 이딴 식으로 만들면 안된다
  // 5. 왜냐, GET 메소드 자체가 데이터를 가져온다는 뜻인데 get이 또있음 중복
  // 6. GET /rentcar <- 전부 다 가져옴
  // 7. GET /rentcar/number 이런식으로 만들어주는게 좋다 <- 하나만 쿼리로 가져옴
  // 8. 위 두개 예시처럼 주소만 봐도 어떤걸 하는지 예상이 가게 만들어줘야한다
  // 9. 이게 핵심 !

  /*
    conrtroller  contructor에 넣어줘야할 리스트 !
    이런식으로 넣어주면 다른 서비스를 사용할 수 있답니다.
    private usersService: UsersService,
    private assetsService: AssetsService,
    private charactersService: CharactersService,
    private soulsService: SoulsService,
    private presetsService: PresetsService,
    private saintSoulsService: SaintSoulsService,
  ) {}
  */

  /*
  이런식으로 service에서 생성해주면 됩니다.
  
  async create({ steam_id }: Partial<Assets>): Promise<Assets> {
    const newAssets = this.assetsRepository.create({ steam_id });
    return await this.assetsRepository.save(newAssets);
  }
  */

  /*
   update 하는 로직입니다.
   
     async update(steam_id: string, key: number): Promise<Assets> {
    const asset = await this.assetsRepository.findOne({ where: { steam_id: steam_id } });
    asset.key = key;
    await this.assetsRepository.save(asset);
    return asset;
  }

  find 해서  찾은다음에 객체 업데이트해서 save 해줌... 이게 뭐야 근데 어떻게해 이렇게 하래 ...;;

  */

  //   @Post(':cno')
  //   async createReserve(
  //     @Body() createReserveDto: ReserveDto,
  //     @Param('cno') cno: string,
  //   ) {
  //     const reserve = await this.reserveService.createReserve(
  //       createReserveDto,
  //       cno,
  //     );
  //     return reserve;
  //   }
}
