// import * as Sentry from '@sentry/node'
// import moment from 'moment-timezone/moment-timezone'
// import { EntityRepository, FindManyOptions, getCustomRepository, Repository } from 'typeorm'
// import { Company, CompanyType } from '../models/Company'
// @EntityRepository(Company)
// export class CompanyRepository extends Repository<Company> {
//   // public async findBuyerCompanyByBuyerId(buyerId: string): Promise<Company | undefined> {
//   //   const objBuyer = await getCustomRepository(CompanyRepository)
//   //     .createQueryBuilder('company')
//   //     .where('company.companyId =:company', {
//   //       company: buyerId,
//   //     })
//   //     .getOne()
//   //   return objBuyer
//   // }
//   // public async saveCompany(company: Company): Promise<Company | string> {
//   //   const result = await this.save(company)
//   //   if (company.companyType == 1) {
//   //     try {
//   //       await getCustomRepository(PermissionRepository).savePermission(
//   //         wholesaleGroup,
//   //         company.companyId
//   //       )
//   //       const ws = new Wholesale()
//   //       ws.company = result
//   //       ws.modifiedDate = new Date()
//   //       await getCustomRepository(WholesaleRepository).save(ws)
//   //     } catch (error) {
//   //       console.error(error)
//   //     }
//   //   } else if (company.companyType == 2) {
//   //     try {
//   //       await getCustomRepository(PermissionRepository).savePermission(
//   //         retailGroup,
//   //         company.companyId
//   //       )
//   //       const rt = new Retail()
//   //       rt.company = result
//   //       rt.modifiedDate = new Date()
//   //       await getCustomRepository(RetailRepository).save(rt)
//   //     } catch (error) {
//   //       console.error(error)
//   //     }
//   //   }
//   //   return company
//   // }
//   // public async saveCompanies(company: Company[]): Promise<Company[] | string> {
//   //   return await this.save(company)
//   // }

//   // public async findCompanyByFilter(
//   //   companyName: string,
//   //   district: string,
//   //   subDistrict: string,
//   //   companyProvince: string,
//   //   retailFormat: string,
//   //   lastVisit: number,
//   //   saleId: number
//   // ): Promise<Company[] | String | undefined> {
//   //   let pusher = []
//   //   const user = await getCustomRepository(UserRepository).findOne({
//   //     where: { userId: saleId },
//   //     relations: ['territory'],
//   //   })
//   //   let getLocation = []
//   //   if (!user?.territory) {
//   //     return 'wrong user territory'
//   //   } else {
//   //     getLocation = await getCustomRepository(UserLocationProviderRepository).getLocationText(
//   //       user.territory.territories
//   //     )
//   //   }
//   //   let pushLocation = []
//   //   for (const each of getLocation) {
//   //     // const retailList: Company[] = await this.find({
//   //     //   where: {
//   //     //     district: Like(`%${each.district}%`),
//   //     //     companyProvince: Like(`%${each.province}%`),
//   //     //   },
//   //     //   relations: ['retail', 'companyBranch', 'companyContact', 'retail.createdBy'],
//   //     //   order: {
//   //     //     companyId: 'DESC',
//   //     //   },
//   //     // })
//   //     const retailList: Company[] = await getCustomRepository(CompanyRepository)
//   //       .createQueryBuilder('company')
//   //       .leftJoinAndSelect('company.settlingBillRetail', 'settlingBillRetail.active')
//   //       .leftJoinAndSelect('company.retail', 'retail')
//   //       .leftJoinAndSelect('company.companyContact', 'companyContact')
//   //       .leftJoinAndSelect('company.companyBranch', 'companyBranch')
//   //       .leftJoinAndSelect('retail.createdBy', 'createdBy')
//   //       .where('company.district =:district and company.companyProvince =:companyProvince', {
//   //         district: each.district,
//   //         companyProvince: each.province,
//   //       })
//   //       .orderBy('company.companyId', 'DESC')
//   //       .getMany()
//   //     for (const eachCompany of retailList) {
//   //       if (eachCompany.retail != null) {
//   //         if (eachCompany.retail.createdBy.userId === user.userId) {
//   //           pushLocation.push(eachCompany)
//   //         }
//   //       }
//   //     }
//   //   }
//   //   let retailList: Company[] = []
//   //   if (subDistrict != '' && district != '' && companyProvince != '' && retailFormat != '') {
//   //     retailList = pushLocation.filter(
//   //       (data) =>
//   //         data.subDistrict == subDistrict &&
//   //         data.district == district &&
//   //         data.companyProvince == companyProvince &&
//   //         data.retail.retailFormat == retailFormat
//   //     )
//   //   }
//   //   if (subDistrict != '' && district != '' && companyProvince != '' && retailFormat === '') {
//   //     retailList = pushLocation.filter(
//   //       (data) =>
//   //         data.subDistrict == subDistrict &&
//   //         data.district == district &&
//   //         data.companyProvince == companyProvince
//   //     )
//   //   }
//   //   if (district != '' && companyProvince != '' && subDistrict === '' && retailFormat === '') {
//   //     retailList = pushLocation.filter(
//   //       (data) => data.district == district && data.companyProvince == companyProvince
//   //     )
//   //   }
//   //   if (district === '' && companyProvince != '' && subDistrict === '' && retailFormat === '') {
//   //     retailList = pushLocation.filter((data) => data.companyProvince == companyProvince)
//   //   }
//   //   if (district != '' && companyProvince != '' && subDistrict === '' && retailFormat != '') {
//   //     retailList = pushLocation.filter(
//   //       (data) =>
//   //         data.district == district &&
//   //         data.companyProvince == companyProvince &&
//   //         data.retail.retailFormat == retailFormat
//   //     )
//   //   }
//   //   if (retailFormat != '' && companyProvince != '' && subDistrict === '' && district === '') {
//   //     retailList = pushLocation.filter(
//   //       (data) =>
//   //         data.companyProvince == companyProvince && data.retail.retailFormat == retailFormat
//   //     )
//   //   }
//   //   if (retailFormat != '' && companyProvince === '' && subDistrict === '' && district === '') {
//   //     retailList = pushLocation.filter((data) => data.retail.retailFormat == retailFormat)
//   //   }
//   //   if (subDistrict === '' && district === '' && companyProvince === '' && retailFormat === '') {
//   //     retailList = pushLocation
//   //   }
//   //   let currentDate = moment().tz('Asia/Bangkok').format('YYYY-MM-DD, h:mm:ss a')
//   //   if (lastVisit) {
//   //     for (const each of retailList) {
//   //       if (each.retail != null) {
//   //         const user = each.retail.createdBy
//   //         if (lastVisit == 1) {
//   //           const dateTo = moment(each.retail.lastVisitDate)
//   //             .tz('Asia/Bangkok')
//   //             .format('YYYY-MM-DD, h:mm:ss a')
//   //           let dateFrom = moment()
//   //             .subtract(7, 'd')
//   //             .tz('Asia/Bangkok')
//   //             .format('YYYY-MM-DD, h:mm:ss a')
//   //           console.log(currentDate, 'in')
//   //           if (moment(dateTo).isBetween(dateFrom, currentDate)) {
//   //             pusher.push(each)
//   //           }
//   //         }
//   //         if (lastVisit == 2) {
//   //           const dateTo = moment(each.retail.lastVisitDate)
//   //             .tz('Asia/Bangkok')
//   //             .format('YYYY-MM-DD, h:mm:ss a')
//   //           let dateFrom = moment()
//   //             .subtract(14, 'd')
//   //             .tz('Asia/Bangkok')
//   //             .format('YYYY-MM-DD, h:mm:ss a')
//   //           if (moment(dateTo).isBetween(dateFrom, currentDate)) {
//   //             pusher.push(each)
//   //           }
//   //         }
//   //         if (lastVisit == 3) {
//   //           const dateTo = moment(each.retail.lastVisitDate)
//   //             .tz('Asia/Bangkok')
//   //             .format('YYYY-MM-DD, h:mm:ss a')
//   //           let dateFrom = moment()
//   //             .subtract(1, 'months')
//   //             .tz('Asia/Bangkok')
//   //             .format('YYYY-MM-DD, h:mm:ss a')
//   //           if (moment(dateTo).isBetween(dateFrom, currentDate)) {
//   //             pusher.push(each)
//   //           }
//   //         }
//   //         if (lastVisit == 4) {
//   //           const dateTo = moment(each.retail.lastVisitDate)
//   //             .tz('Asia/Bangkok')
//   //             .format('YYYY-MM-DD, h:mm:ss a')
//   //           let dateFrom = moment()
//   //             .subtract(2, 'months')
//   //             .tz('Asia/Bangkok')
//   //             .format('YYYY-MM-DD, h:mm:ss a')
//   //           if (moment(dateTo).isBetween(dateFrom, currentDate)) {
//   //             pusher.push(each)
//   //           }
//   //         }
//   //         if (lastVisit == 5) {
//   //           const dateTo = moment(each.retail.lastVisitDate)
//   //             .tz('Asia/Bangkok')
//   //             .format('YYYY-MM-DD, h:mm:ss a')
//   //           let dateFrom = moment()
//   //             .subtract(2, 'months')
//   //             .tz('Asia/Bangkok')
//   //             .format('YYYY-MM-DD, h:mm:ss a')
//   //           if (moment(dateTo).isBefore(dateFrom)) {
//   //             pusher.push(each)
//   //           }
//   //         }
//   //       }
//   //     }

//   //     return pusher
//   //   } else {
//   //     for (const each of retailList) {
//   //       if (each.retail != null) {
//   //         pusher.push(each)
//   //       }
//   //     }
//   //     return pusher
//   //   }
//   // }

//   // public async saveWholesaleCompany(company: Company): Promise<Company | string> {
//   //   const getAllWholesale = await getCustomRepository(WholesaleRepository).find()
//   //   const filterWholesale = getAllWholesale.filter(
//   //     (data) => data.erpCode == company.wholesale.erpCode
//   //   )
//   //   if (!filterWholesale.length) {
//   //     let result = await this.save(company)
//   //     try {
//   //       await getCustomRepository(WholesaleRepository).saveWholesale(result.wholesale, result)
//   //       await getCustomRepository(PermissionRepository).savePermission(
//   //         wholesaleGroup,
//   //         result.companyId
//   //       )
//   //       for (const each of company.territory) {
//   //         await getCustomRepository(WholesaleOnDemandTerritoryRepository).saveTerritories(
//   //           each,
//   //           result.companyId
//   //         )
//   //       }
//   //     } catch (error) {
//   //       console.error(error)
//   //     }
//   //     return result
//   //   } else {
//   //     return 'ERP code is duplicated'
//   //   }
//   // }

//   // public async saveRetailCompany(company: Company): Promise<Company | string> {
//   //   let result = await this.save(company)
//   //   try {
//   //     await getCustomRepository(WholesaleRepository).saveWholesale(result.wholesale, result)
//   //     await getCustomRepository(PermissionRepository).savePermission(retailGroup, result.companyId)
//   //   } catch (error) {
//   //     console.error(error)
//   //   }

//   //   return result
//   // }

//   // public async deestoneSaveCompany(company: Company): Promise<Company | string> {
//   //   return await this.save(company)
//   // }
//   // public async updateCompanyBySalePipeline(company: Company): Promise<Company | string> {
//   //   return await this.save(company)
//   // }
//   // public async findAllCompany(): Promise<Company[]> {
//   //   return await this.find()
//   // }

//   // public async findCompanyById(id: number): Promise<Company | undefined> {
//   //   return await getCustomRepository(CompanyRepository)
//   //     .createQueryBuilder('company')
//   //     .leftJoinAndSelect('company.customerStatus', 'customerStatus')
//   //     .leftJoinAndSelect('company.user', 'user')
//   //     .leftJoinAndSelect('company.territory', 'territory')
//   //     .leftJoinAndSelect('user.role', 'role')
//   //     .leftJoinAndSelect('company.wholesale', 'wholesale')
//   //     .leftJoinAndSelect('wholesale.sellingBrand', 'sellingBrand')
//   //     .leftJoinAndSelect('wholesale.deestoneSalesName', 'deestoneSalesName')
//   //     .leftJoinAndSelect('wholesale.wholesaleTierOneName', 'wholesaleTierOneName')
//   //     .leftJoinAndSelect('wholesale.wholesaleTierOneSalesName', 'wholesaleTierOneSalesName')
//   //     .leftJoinAndSelect('wholesale.wholesaleWarehouse', 'wholesaleWarehouse')
//   //     .where('company.companyId =:id', {
//   //       id: id,
//   //     })
//   //     .getOne()
//   // }
//   // public async findCompanyByUserId(id: number | undefined): Promise<Company[] | undefined> {
//   //   let getCompany = await getCustomRepository(CompanyRepository).find({ relations: ['user'] })
//   //   return getCompany
//   // }
//   // public async findCompanyByCompanyCode(companyCode: string): Promise<Company | undefined> {
//   //   return await this.findOne({ companyCode: companyCode })
//   // }
//   // /**
//   //  *
//   //  * @param companyType
//   //  */
//   // public async findCompanyByType(
//   //   companyType: number,
//   //   page: number,
//   //   pageSize: number,
//   //   filter?: number,
//   //   keyword?: string
//   // ) {
//   //   enum FILTER {
//   //     COMPANY_CODE = 1,
//   //     COMPANY_NAME = 2,
//   //     DEESTONE_SALE_NAME = 3,
//   //     WHOLESALE_SALE_NAME = 4,
//   //     SALES_SUPPORT_NAME = 5,
//   //   }
//   //   let take = pageSize
//   //   let skip = (page - 1) * pageSize
//   //   let condition = {
//   //     relations: [
//   //       'wholesale',
//   //       'wholesale.deestoneSalesName',
//   //       'wholesale.wholesaleTierOneName',
//   //       'wholesale.wholesaleTierOneSalesName',
//   //       'companyContact',
//   //       'retail',
//   //     ],
//   //     where: [{ companyType: companyType }],
//   //     order: { companyId: 'DESC' },
//   //     take: take,
//   //     skip: skip,
//   //   } as FindManyOptions
//   //   let result = await this.find(condition)
//   //   if (filter && keyword && CompanyType.Retail) {
//   //     switch (filter) {
//   //       case FILTER.COMPANY_CODE:
//   //         result = result.filter((x) => x.companyId.toString().indexOf(keyword.trim()) > -1)
//   //         break
//   //       case FILTER.COMPANY_NAME:
//   //         result = result.filter(
//   //           (x) =>
//   //             x.companyName && x.companyName.toUpperCase().includes(keyword.toUpperCase().trim())
//   //         )
//   //         break
//   //       case FILTER.DEESTONE_SALE_NAME:
//   //         result = result.filter((x) =>
//   //           x.retail?.deestoneSaleName.toUpperCase().includes(keyword.toUpperCase().trim())
//   //         )
//   //         break
//   //       case FILTER.WHOLESALE_SALE_NAME:
//   //         result = result.filter((x) =>
//   //           x.retail?.wholesaleSaleName.toUpperCase().includes(keyword.toUpperCase().trim())
//   //         )
//   //         break
//   //       case FILTER.SALES_SUPPORT_NAME:
//   //         result = result.filter((x) =>
//   //           x.retail?.salesSupportName.toUpperCase().includes(keyword.toUpperCase().trim())
//   //         )
//   //         break
//   //       default:
//   //         break
//   //     }
//   //   }

//   //   try {
//   //     // const result = await this.find({
//   //     //   relations: [
//   //     //     "wholesale",
//   //     //     "wholesale.deestoneSalesName",
//   //     //     "wholesale.wholesaleTierOneName",
//   //     //     "wholesale.wholesaleTierOneSalesName",
//   //     //   ],
//   //     //   where: [{ companyType: companyType }],
//   //     //   take: take,
//   //     //   skip: skip,
//   //     // })
//   //     console.log(result)
//   //     if (result) {
//   //       return result
//   //     } else {
//   //       console.log('company not found')
//   //     }
//   //   } catch (e) {
//   //     console.error(e)
//   //   }
//   // }
//   // public async findCompanyByTypeSalePipeline(
//   //   companyType: number,
//   //   page: number,
//   //   pageSize: number,
//   //   saleId: number
//   // ) {
//   //   let take = pageSize
//   //   let skip = (page - 1) * pageSize
//   //   try {
//   //     const result: Retail[] | undefined = await getCustomRepository(RetailRepository).find({
//   //       where: { createdBy: saleId },
//   //       relations: ['company', 'company.companyContact'],
//   //       take: take,
//   //       skip: skip,
//   //       order: { retailId: 'DESC' },
//   //     })
//   //     if (result) {
//   //       return result
//   //     } else {
//   //       console.log('company not found')
//   //     }
//   //   } catch (e) {
//   //     console.error(e)
//   //   }
//   // }
//   // /**
//   //  *
//   //  * @param companyRegion
//   //  * @param page
//   //  * @param pageSize
//   //  */
//   // public async findRetailByCompanyRegion(
//   //   companyRegion: number,
//   //   companySubdistrict: string,
//   //   page: number,
//   //   pageSize: number
//   // ) {
//   //   let take = pageSize
//   //   let skip = (page - 1) * pageSize
//   //   try {
//   //     const result = await this.find({
//   //       relations: ['user'],
//   //       select: [
//   //         'companyId',
//   //         'companyName',
//   //         'companyType',
//   //         'companyAddress',
//   //         'subDistrict',
//   //         'district',
//   //         'companyProvince',
//   //         'companyRegion',
//   //         'companyCode',
//   //       ],
//   //       where: [
//   //         {
//   //           companyType: CompanyType.Retail,
//   //           companyRegion: companyRegion,
//   //         },
//   //       ],
//   //       take: take,
//   //       skip: skip,
//   //     })
//   //     if (result) {
//   //       let filteredResult = result.filter(
//   //         (x) => x.user.length && x.user.filter((x) => x.lineUserId).length
//   //       )
//   //       // if available for express orders
//   //       filteredResult.forEach((x) => {
//   //         Object.assign(x, {
//   //           isOnDemand: x.subDistrict === companySubdistrict ? true : false,
//   //         })
//   //         delete x.user
//   //       })
//   //       return filteredResult
//   //     } else {
//   //       console.log('company not found')
//   //     }
//   //   } catch (e) {
//   //     console.log(e)
//   //   }
//   // }
//   // public async findRetailWhereUserInCompany() {
//   //   try {
//   //     const result = await this.find({
//   //       relations: ['user'],
//   //       select: [
//   //         'companyId',
//   //         'companyName',
//   //         'companyType',
//   //         'companyAddress',
//   //         'subDistrict',
//   //         'district',
//   //         'companyProvince',
//   //         'companyRegion',
//   //       ],
//   //       where: [
//   //         {
//   //           companyType: CompanyType.Retail,
//   //         },
//   //       ],
//   //     })
//   //     if (result) {
//   //       let filteredResult = result.filter(
//   //         (x) => x.user.length && x.user.filter((x) => x.lineUserId).length
//   //       )
//   //       // if available for express orders
//   //       filteredResult.forEach((x) => {
//   //         delete x.user
//   //       })
//   //       return filteredResult
//   //     } else {
//   //       console.log('company not found')
//   //     }
//   //   } catch (e) {
//   //     console.log(e)
//   //   }
//   // }
//   // /**
//   //  *
//   //  * @param subDistrict
//   //  * @param page
//   //  * @param pageSize
//   //  */
//   // public async findRetailBySubDistrict(subDistrict: string, page: number, pageSize: number) {
//   //   let take = pageSize
//   //   let skip = (page - 1) * pageSize
//   //   try {
//   //     const result = await this.find({
//   //       select: [
//   //         'companyId',
//   //         'companyName',
//   //         'companyType',
//   //         'companyAddress',
//   //         'subDistrict',
//   //         'district',
//   //         'companyProvince',
//   //         'companyCode',
//   //       ],
//   //       where: [
//   //         {
//   //           companyType: CompanyType.Retail,
//   //           subDistrict: subDistrict,
//   //         },
//   //       ],
//   //       take: take,
//   //       skip: skip,
//   //     })
//   //     if (result) {
//   //       return result
//   //     } else {
//   //       console.log('company not found')
//   //     }
//   //   } catch (e) {
//   //     console.log(e)
//   //   }
//   // }
//   // /**
//   //  *
//   //  * @param tier
//   //  */
//   // public async findWholesaleByTier(tier: number): Promise<Company[] | undefined> {
//   //   try {
//   //     Sentry.captureMessage(`tier -> ${tier}, companyType -> ${CompanyType.Wholesale}`)
//   //     const result = await this.find({
//   //       select: ['companyId', 'companyName', 'tier'],
//   //       where: { tier: tier, companyType: CompanyType.Wholesale },
//   //     })
//   //     if (result) {
//   //       return result
//   //     } else {
//   //       console.log('company not found')
//   //     }
//   //   } catch (e) {
//   //     console.log(e)
//   //   }
//   // }

//   // public async updateCustomerStatus(companyId: number) {
//   //   let getCompany = await getCustomRepository(CompanyRepository).findCompanyById(companyId)
//   //   if (!getCompany) {
//   //     return 'no company found'
//   //   }
//   //   getCompany.customerStatus.customerStatusId = 4
//   //   getCompany.customerStatus.statusValue = 4
//   //   return await this.save(getCompany)
//   // }

//   // public async findAllCompanyByPaginate(page: number, pageSize: number): Promise<Paginate> {
//   //   const skip = (page - 1) * pageSize
//   //   const company: Company[] = await this.find({
//   //     take: pageSize,
//   //     skip: skip,
//   //     order: {
//   //       companyId: 'ASC',
//   //     },
//   //   })
//   //   const paginate = new Paginate()
//   //   paginate.page = page
//   //   paginate.pageSize = pageSize
//   //   paginate.item = company
//   //   return paginate
//   // }
//   // public async updateCompany(
//   //   oldCompany: Company,
//   //   newCompany: Company,
//   //   user: User
//   // ): Promise<Company> {
//   //   if (oldCompany.companyType === 2) {
//   //     oldCompany.retail.createdBy = user.userId
//   //     oldCompany.retail.deestoneSaleName = newCompany.retail.deestoneSaleName
//   //   }
//   //   oldCompany.companyName = newCompany.companyName
//   //   oldCompany.companyAddress = newCompany.companyAddress
//   //   oldCompany.companyProvince = newCompany.companyProvince
//   //   oldCompany.district = newCompany.district
//   //   oldCompany.subDistrict = newCompany.subDistrict
//   //   oldCompany.companyZipCode = newCompany.companyZipCode
//   //   oldCompany.companyTel = newCompany.companyTel
//   //   oldCompany.companyCode = newCompany.companyCode
//   //   oldCompany.companySize = newCompany.companySize
//   //   oldCompany.companyRegion = newCompany.companyRegion
//   //   oldCompany.companyEmail = newCompany.companyEmail
//   //   oldCompany.companyType = newCompany.companyType
//   //   oldCompany.tier = newCompany.tier
//   //   oldCompany.isOnDemand = newCompany.isOnDemand
//   //   oldCompany.salesVerifictionCode = newCompany.salesVerifictionCode
//   //   oldCompany.onDemandShippingFees = newCompany.onDemandShippingFees
//   //   oldCompany.regularShippingFees = newCompany.regularShippingFees
//   //   return this.save(oldCompany)
//   // }

//   // public async updateWholesaleCompany(oldCompany: Company, newCompany: Company): Promise<Company> {
//   //   oldCompany.companyName = newCompany.companyName
//   //   oldCompany.companyAddress = newCompany.companyAddress
//   //   oldCompany.companyProvince = newCompany.companyProvince
//   //   oldCompany.district = newCompany.district
//   //   oldCompany.taxId = newCompany.taxId
//   //   oldCompany.subDistrict = newCompany.subDistrict
//   //   oldCompany.companyZipCode = newCompany.companyZipCode
//   //   oldCompany.companyTel = newCompany.companyTel
//   //   oldCompany.companyCode = newCompany.companyCode
//   //   oldCompany.companySize = newCompany.companySize
//   //   oldCompany.companyRegion = newCompany.companyRegion
//   //   oldCompany.companyType = newCompany.companyType
//   //   oldCompany.tier = newCompany.tier
//   //   oldCompany.onDemandMinimumQty = newCompany.onDemandMinimumQty
//   //   oldCompany.onDemandShippingFees = newCompany.onDemandShippingFees
//   //   oldCompany.isOnDemand = newCompany.isOnDemand
//   //   oldCompany.salesVerifictionCode = newCompany.salesVerifictionCode
//   //   oldCompany.onDemandShippingFees = newCompany.onDemandShippingFees
//   //   oldCompany.regularShippingFees = newCompany.regularShippingFees
//   //   oldCompany.wholesale.erpCode = newCompany.wholesale.erpCode
//   //   oldCompany.wholesale.deestoneSalesName = newCompany.wholesale.deestoneSalesName
//   //   oldCompany.wholesale.wholesaleTierOneName = newCompany.wholesale.wholesaleTierOneName
//   //   oldCompany.wholesale.wholesaleTierOneSalesName = newCompany.wholesale.wholesaleTierOneSalesName
//   //   oldCompany.wholesale.deestoneInvoice = newCompany.wholesale.deestoneInvoice
//   //   oldCompany.wholesale.deliveryMethod = newCompany.wholesale.deliveryMethod
//   //   oldCompany.wholesale.warehouseAmount = newCompany.wholesale.warehouseAmount
//   //   oldCompany.wholesale.wholesaleTier = newCompany.wholesale.wholesaleTier
//   //   oldCompany.wholesale.wholesalerType = newCompany.wholesale.wholesalerType
//   //   oldCompany.wholesale.wholesalerLevel = newCompany.wholesale.wholesalerLevel
//   //   oldCompany.wholesale.subGroupDescriptions = newCompany.wholesale.subGroupDescriptions
//   //   oldCompany.wholesale.createDate = newCompany.wholesale.createDate
//   //   oldCompany.wholesale.modifiedDate = newCompany.wholesale.modifiedDate
//   //   oldCompany.wholesale.salePerMonth = newCompany.wholesale.salePerMonth
//   //   oldCompany.wholesale.portContribution = newCompany.wholesale.portContribution
//   //   oldCompany.wholesale.saleForce = newCompany.wholesale.saleForce
//   //   oldCompany.wholesale.deliveryTruck = newCompany.wholesale.deliveryTruck
//   //   oldCompany.wholesale.warehouseCapacity = newCompany.wholesale.warehouseCapacity
//   //   oldCompany.wholesale.topFirstBrand = newCompany.wholesale.topFirstBrand
//   //   oldCompany.wholesale.topFirstPercentSell = newCompany.wholesale.topFirstPercentSell
//   //   oldCompany.wholesale.topSecondBrand = newCompany.wholesale.topSecondBrand
//   //   oldCompany.wholesale.topSecondPercentSell = newCompany.wholesale.topSecondPercentSell
//   //   oldCompany.wholesale.topThirdBrand = newCompany.wholesale.topThirdBrand
//   //   oldCompany.wholesale.topThirdPercentSell = newCompany.wholesale.topThirdPercentSell
//   //   oldCompany.wholesale.totalCustomer = newCompany.wholesale.totalCustomer
//   //   oldCompany.wholesale.otherInsight = newCompany.wholesale.otherInsight
//   //   oldCompany.wholesale.currentChannelDiscount = newCompany.wholesale.currentChannelDiscount
//   //   oldCompany.wholesale.currentRebate = newCompany.wholesale.currentRebate
//   //   oldCompany.wholesale.targetRebate = newCompany.wholesale.targetRebate
//   //   oldCompany.wholesale.rebateDate = newCompany.wholesale.rebateDate

//   //   let saved = await this.save(oldCompany)
//   //   await getCustomRepository(WholesaleWarehouserRepository).updateWarehouse(
//   //     oldCompany.wholesale.wholesaleWarehouse,
//   //     newCompany.wholesale.wholesaleWarehouse
//   //   )
//   //   await getCustomRepository(WholesaleSellingBrandsRepository).updateSellingBrand(
//   //     oldCompany.wholesale.sellingBrand,
//   //     newCompany.wholesale.sellingBrand
//   //   )
//   //   if (newCompany.territory) {
//   //     await getCustomRepository(WholesaleOnDemandTerritoryRepository).updateTerritories(
//   //       oldCompany.territory,
//   //       newCompany.territory
//   //     )
//   //   } else {
//   //     for (const i of oldCompany.territory) {
//   //       await getCustomRepository(WholesaleOnDemandTerritoryRepository).delete({ id: i.id })
//   //     }
//   //   }
//   //   return saved
//   // }

//   // public async updateCompanyRetail(oldCompany: Company, newCompany: Company) {
//   //   newCompany.companyCode = oldCompany.companyCode
//   //   oldCompany.companyName = newCompany.companyName
//   //   oldCompany.companyAddress = newCompany.companyAddress
//   //   oldCompany.companyProvince = newCompany.companyProvince
//   //   oldCompany.district = newCompany.district
//   //   oldCompany.subDistrict = newCompany.subDistrict
//   //   oldCompany.companyZipCode = newCompany.companyZipCode
//   //   oldCompany.companyTel = newCompany.companyTel
//   //   oldCompany.companyCode = newCompany.companyCode
//   //   oldCompany.companySize = newCompany.companySize
//   //   oldCompany.companyRegion = newCompany.companyRegion
//   //   oldCompany.companyEmail = newCompany.companyEmail
//   //   oldCompany.companyOfficialName = newCompany.companyOfficialName
//   //   oldCompany.taxId = newCompany.taxId
//   //   oldCompany.companyType = 2
//   //   oldCompany.tier = newCompany.tier
//   //   oldCompany.isOnDemand = newCompany.isOnDemand
//   //   oldCompany.salesVerifictionCode = newCompany.salesVerifictionCode
//   //   oldCompany.onDemandShippingFees = newCompany.onDemandShippingFees
//   //   oldCompany.regularShippingFees = newCompany.regularShippingFees
//   //   oldCompany.retail.retailFormat = newCompany.retail.retailFormat
//   //   oldCompany.retail.companyCode = newCompany.retail.companyCode
//   //   oldCompany.retail.productTypeGroup = newCompany.retail.productTypeGroup
//   //   oldCompany.retail.email = newCompany.retail.email
//   //   oldCompany.retail.noteDetail = newCompany.retail.noteDetail
//   //   oldCompany.retail.salesDetail = newCompany.retail.salesDetail
//   //   oldCompany.retail.marketingDetail = newCompany.retail.marketingDetail
//   //   oldCompany.retail.retailerPotential = newCompany.retail.retailerPotential
//   //   oldCompany.retail.deestoneEstimateSell = newCompany.retail.deestoneEstimateSell
//   //   oldCompany.retail.salePipelineStage = newCompany.retail.salePipelineStage
//   //   oldCompany.retail.retailerStatus = newCompany.retail.retailerStatus
//   //   oldCompany.retail.sellPerMonth = newCompany.retail.sellPerMonth
//   //   oldCompany.retail.stockAmountPerMonth = newCompany.retail.stockAmountPerMonth
//   //   oldCompany.retail.lat = newCompany.retail.lat
//   //   oldCompany.retail.long = newCompany.retail.long
//   //   oldCompany.retail.sellPerMonthBeforePlatform = newCompany.retail.sellPerMonthBeforePlatform
//   //   oldCompany.retail.firstBuyerGroup = newCompany.retail.firstBuyerGroup
//   //   oldCompany.retail.secondBuyerGroup = newCompany.retail.secondBuyerGroup
//   //   oldCompany.retail.thirdBuyerGroup = newCompany.retail.thirdBuyerGroup
//   //   oldCompany.retail.currentBrandsSell = newCompany.retail.currentBrandsSell
//   //   oldCompany.retail.firstTopSell = newCompany.retail.firstTopSell
//   //   oldCompany.retail.firstTopSellPercent = newCompany.retail.firstTopSellPercent
//   //   oldCompany.retail.secondTopSell = newCompany.retail.secondTopSell
//   //   oldCompany.retail.secondTopSellPercent = newCompany.retail.secondTopSellPercent
//   //   oldCompany.retail.thirdTopSell = newCompany.retail.thirdTopSell
//   //   oldCompany.retail.thirdTopSellPercent = newCompany.retail.thirdTopSellPercent
//   //   oldCompany.retail.contactName = newCompany.retail.contactName
//   //   oldCompany.retail.averageSellPerItem = newCompany.retail.averageSellPerItem
//   //   oldCompany.retail.percentOfCloseDeal = newCompany.retail.percentOfCloseDeal
//   //   oldCompany.retail.averageCloseDealDuration = newCompany.retail.averageCloseDealDuration
//   //   oldCompany.retail.closeDealReason = newCompany.retail.closeDealReason
//   //   oldCompany.retail.notCloseDealReason = newCompany.retail.notCloseDealReason
//   //   oldCompany.retail.retailerPackageOffered = newCompany.retail.retailerPackageOffered
//   //   oldCompany.retail.ruleAndPolicy = newCompany.retail.ruleAndPolicy
//   //   oldCompany.retail.numberOfMidTierTireBrand = newCompany.retail.numberOfMidTierTireBrand
//   //   oldCompany.retail.differentFromTargetAndActualSell =
//   //     newCompany.retail.differentFromTargetAndActualSell
//   //   oldCompany.retail.brandNameFastFit = newCompany.retail.brandNameFastFit
//   //   oldCompany.retail.suggestionToDeestone = newCompany.retail.suggestionToDeestone
//   //   oldCompany.retail.contactPosition = newCompany.retail.contactPosition
//   //   oldCompany.retail.contactMobile = newCompany.retail.contactMobile
//   //   oldCompany.retail.lineUserId = newCompany.retail.lineUserId
//   //   oldCompany.retail.workHours = newCompany.retail.workHours
//   //   oldCompany.retail.branchAmount = newCompany.retail.branchAmount
//   //   oldCompany.retail.mechanicAmount = newCompany.retail.mechanicAmount
//   //   oldCompany.retail.sellingProductDesc = newCompany.retail.sellingProductDesc
//   //   oldCompany.retail.onlineSellChannel = newCompany.retail.onlineSellChannel
//   //   oldCompany.retail.primaryWholesale = newCompany.retail.primaryWholesale
//   //   oldCompany.retail.secondaryWholesale = newCompany.retail.secondaryWholesale
//   //   oldCompany.retail.paymentType = newCompany.retail.paymentType
//   //   oldCompany.retail.creditTerm = newCompany.retail.creditTerm
//   //   oldCompany.retail.salesCode = newCompany.retail.salesCode
//   //   oldCompany.retail.registerDate = newCompany.retail.registerDate
//   //   oldCompany.retail.lastVisitDate = newCompany.retail.lastVisitDate
//   //   oldCompany.retail.deestoneSaleName = newCompany.retail.deestoneSaleName
//   //   oldCompany.retail.firstDeestoneSellerName = newCompany.retail.firstDeestoneSellerName
//   //   oldCompany.retail.firstDeestoneSellerPayMethod = newCompany.retail.firstDeestoneSellerPayMethod
//   //   oldCompany.retail.firstDeestoneSellerCreditTerm =
//   //     newCompany.retail.firstDeestoneSellerCreditTerm
//   //   oldCompany.retail.secondDeestoneSellerName = newCompany.retail.secondDeestoneSellerName
//   //   oldCompany.retail.secondDeestoneSellerPayMethod =
//   //     newCompany.retail.secondDeestoneSellerPayMethod
//   //   oldCompany.retail.secondDeestoneSellerCreditTerm =
//   //     newCompany.retail.secondDeestoneSellerCreditTerm
//   //   oldCompany.retail.thirdDeestoneSellerName = newCompany.retail.thirdDeestoneSellerName
//   //   oldCompany.retail.thirdDeestoneSellerPayMethod = newCompany.retail.thirdDeestoneSellerPayMethod
//   //   oldCompany.retail.thirdDeestoneSellerCreditTerm =
//   //     newCompany.retail.thirdDeestoneSellerCreditTerm
//   //   oldCompany.retail.firstOtherBrandSellerName = newCompany.retail.firstOtherBrandSellerName
//   //   oldCompany.retail.firstOtherBrandSellerPayMethod =
//   //     newCompany.retail.firstOtherBrandSellerPayMethod
//   //   oldCompany.retail.firstOtherBrandSellerCreditTerm =
//   //     newCompany.retail.firstOtherBrandSellerCreditTerm
//   //   oldCompany.retail.secondOtherBrandSellerName = newCompany.retail.secondOtherBrandSellerName
//   //   oldCompany.retail.secondOtherBrandSellerPayMethod =
//   //     newCompany.retail.secondOtherBrandSellerPayMethod
//   //   oldCompany.retail.secondOtherBrandSellerCreditTerm =
//   //     newCompany.retail.secondOtherBrandSellerCreditTerm
//   //   oldCompany.retail.thirdOtherBrandSellerName = newCompany.retail.thirdOtherBrandSellerName
//   //   oldCompany.retail.thirdOtherBrandSellerPayMethod =
//   //     newCompany.retail.thirdOtherBrandSellerPayMethod
//   //   oldCompany.retail.thirdOtherBrandSellerCreditTerm =
//   //     newCompany.retail.thirdOtherBrandSellerCreditTerm
//   //   oldCompany.retail.wholesaleSaleName = newCompany.retail.wholesaleSaleName
//   //   oldCompany.retail.salesSupportName = newCompany.retail.salesSupportName
//   //   oldCompany.retail.sellingBrands = newCompany.retail.sellingBrands
//   //   oldCompany.retail.stage = newCompany.retail.stage
//   //   oldCompany.retail.faceBookAccount = newCompany.retail.faceBookAccount
//   //   oldCompany.retail.status = newCompany.retail.status
//   //   let save = await this.save(oldCompany)
//   //   await getCustomRepository(CompanyBranchRepository).updateBranch(
//   //     oldCompany.companyBranch,
//   //     newCompany.companyBranch
//   //   )
//   //   await getCustomRepository(CompanyContactRepository).updateContact(
//   //     oldCompany.companyContact,
//   //     newCompany.companyContact
//   //   )
//   //   await getCustomRepository(RetailOnDemandRecordRepository).saveRecord(
//   //     oldCompany.records,
//   //     newCompany.records
//   //   )
//   //   return save
//   // }

//   // public async findRetailByCompanyId(companyId: number): Promise<Company | undefined> {
//   //   const result = await this.findOne(
//   //     { companyId: companyId },
//   //     {
//   //       relations: [
//   //         'companyContact',
//   //         'companyBranch',
//   //         'records',
//   //         'retail',
//   //         'retail.rtSellerCompany',
//   //         'retail.rtSellerCompany.sellerName',
//   //         'retail.rtSellerCompany.sellerNameDeestone',
//   //       ],
//   //     }
//   //   )
//   //   return result
//   // }

//   // /**
//   //  *
//   //  * @param companyList
//   //  * @param userId
//   //  */
//   // public async saveRetailMaster(companyList: Company[]): Promise<[Array<any>, number]> {
//   //   let count_fail = 0
//   //   let error_list: any[] = []
//   //   for (let item of companyList) {
//   //     let randomCode: string = ''
//   //     let hasCode: Company | undefined = new Company()
//   //     do {
//   //       randomCode = '0000000000'.replace(/0/g, function () {
//   //         return (~~(Math.random() * 16)).toString(16)
//   //       })

//   //       hasCode = await getCustomRepository(CompanyRepository).findOne({
//   //         companyCode: randomCode,
//   //       })
//   //     } while (hasCode)
//   //     item.companyCode = randomCode
//   //     item.retail.companyCode = randomCode
//   //     try {
//   //       await this.save(item)
//   //       console.log('[SAVED]')
//   //     } catch (err) {
//   //       console.error(err)
//   //       count_fail++
//   //     }
//   //   }

//   //   return Promise.resolve([error_list, count_fail])
//   // }
// }
