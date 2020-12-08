// import * as Sentry from '@sentry/node'
// import { Advised } from 'aspect.js'
// import { NextFunction, Request, Response } from 'express'
// import { getCustomRepository } from 'typeorm'
// import { Company, CompanyType } from '../models/Company'

// @Advised()
// class CompanyController {
//   // public async saveCompany(req: Request, res: Response): Promise<Response> {
//   //   const company: Company = req.body
//   //   let randomCode: string = ''
//   //   let hasCode: Company | undefined = new Company()
//   //   do {
//   //     randomCode = '0000000000'.replace(/0/g, function () {
//   //       return (~~(Math.random() * 16)).toString(16)
//   //     })

//   //     hasCode = await getCustomRepository(CompanyRepository).findOne({
//   //       companyCode: randomCode,
//   //     })
//   //   } while (hasCode)
//   //   company.companyCode = randomCode

//   //   const oldCustomerStatus: CustomerStatus | undefined = await getCustomRepository(
//   //     CustomerStatusRepository
//   //   ).findOne(3)
//   //   if (!oldCustomerStatus) {
//   //     return res.status(404).json({
//   //       message: 'Customer Status not found',
//   //     })
//   //   }
//   //   company.customerStatus = oldCustomerStatus
//   //   const findCompanyName = await getCustomRepository(CompanyRepository).findOne({
//   //     companyName: company.companyName,
//   //   })
//   //   if (!findCompanyName) {
//   //     const result: Company | string | Response = await getCustomRepository(CompanyRepository)
//   //       .saveCompany(company)
//   //       .catch((err) => {
//   //         return res.status(500).json({
//   //           response: err,
//   //         })
//   //       })
//   //     return res.status(201).json({
//   //       message: `insert successfully`,
//   //       response: result,
//   //       responseCode: 201,
//   //     })
//   //   } else {
//   //     return res.status(202).json({
//   //       message: `company name is duplicate`,
//   //       responseCode: 202,
//   //     })
//   //   }
//   // }

//   // /**
//   //  * async updateCompanyRetail
//   //  */
//   // public async updateCompanyRetail(req: Request, res: Response) {
//   //   const companyId = parseInt(req.query.companyId)
//   //   const newCompany = req.body
//   //   const oldCompany = await getCustomRepository(CompanyRepository).findOne({
//   //     where: { companyId: companyId },
//   //     relations: ['retail', 'companyBranch', 'companyContact', 'records'],
//   //   })
//   //   if (!oldCompany) {
//   //     return res.status(404).json({
//   //       message: `Company not found id ${companyId}`,
//   //     })
//   //   }
//   //   if (oldCompany.companyType != 2) {
//   //     return res.status(404).json({
//   //       message: `Company type is not match`,
//   //     })
//   //   }
//   //   const findCompanyName = await getCustomRepository(CompanyRepository)
//   //     .createQueryBuilder('company')
//   //     .where('company.companyName =:companyName and company.companyId != :companyId', {
//   //       companyName: newCompany.companyName,
//   //       companyId: oldCompany.companyId,
//   //     })
//   //     .getOne()
//   //   if (!findCompanyName) {
//   //     const updateRetail = await getCustomRepository(CompanyRepository).updateCompanyRetail(
//   //       oldCompany,
//   //       newCompany
//   //     )
//   //     const finalResult = await getCustomRepository(CompanyRepository).findOne({
//   //       where: { companyId: updateRetail.companyId },
//   //       relations: ['retail', 'companyBranch', 'companyContact', 'records'],
//   //     })
//   //     return res.status(201).json({
//   //       message: `update successfully`,
//   //       response: finalResult,
//   //       responseCode: 201,
//   //     })
//   //   } else {
//   //     return res.status(202).json({
//   //       message: `company name is duplicate`,
//   //       responseCode: 202,
//   //     })
//   //   }
//   // }

//   // public async saveWholesaleCompany(req: Request, res: Response): Promise<Response> {
//   //   const company: Company = req.body
//   //   let randomCode: string = ''
//   //   let hasCode: Company | undefined = new Company()
//   //   do {
//   //     randomCode = '0000000000'.replace(/0/g, function () {
//   //       return (~~(Math.random() * 16)).toString(16)
//   //     })

//   //     hasCode = await getCustomRepository(CompanyRepository).findOne({
//   //       companyCode: randomCode,
//   //     })
//   //   } while (hasCode)

//   //   company.companyCode = randomCode

//   //   const oldCustomerStatus: CustomerStatus | undefined = await getCustomRepository(
//   //     CustomerStatusRepository
//   //   ).findOne(3)
//   //   if (!oldCustomerStatus) {
//   //     return res.status(404).json({
//   //       message: 'Customer Status not found',
//   //     })
//   //   }
//   //   company.customerStatus = oldCustomerStatus
//   //   const findCompanyName = await getCustomRepository(CompanyRepository)
//   //     .createQueryBuilder('company')
//   //     .where('company.companyName =:companyName', {
//   //       companyName: company.companyName,
//   //     })
//   //     .getOne()

//   //   if (!findCompanyName) {
//   //     const result: Company | string | Response = await getCustomRepository(CompanyRepository)
//   //       .saveWholesaleCompany(company)
//   //       .catch((err) => {
//   //         return res.status(500).json({
//   //           response: err,
//   //         })
//   //       })
//   //     if (result == 'ERP code is duplicated') {
//   //       return res.status(400).json({
//   //         message: `insert unsuccessfully`,
//   //         response: result,
//   //       })
//   //     } else {
//   //       return res.status(201).json({
//   //         message: `insert successfully`,
//   //         response: result,
//   //         responseCode: 201,
//   //       })
//   //     }
//   //   } else {
//   //     return res.status(203).json({
//   //       message: `insert successfully`,
//   //       responseCode: 202,
//   //     })
//   //   }
//   // }

//   // /**
//   //  * async filterPipelineRetailList
//   //  */
//   // public async filterPipelineRetailList(req: Request, res: Response) {
//   //   const companyName = req.query.companyName
//   //   const district = req.query.district
//   //   const subDistrict = req.query.subDistrict
//   //   const companyProvince = req.query.companyProvince
//   //   const retailFormat = req.query.retailFormat
//   //   const lastVisit = req.query.lastVisit
//   //   const saleId = req.query.saleId
//   //   const result = await getCustomRepository(CompanyRepository).findCompanyByFilter(
//   //     companyName,
//   //     district,
//   //     subDistrict,
//   //     companyProvince,
//   //     retailFormat,
//   //     lastVisit,
//   //     saleId
//   //   )
//   //   if (result?.length == 0) {
//   //     return res.status(200).json({
//   //       message: 'no data',
//   //       response: result,
//   //     })
//   //   } else {
//   //     return res.status(200).json({
//   //       response: result,
//   //     })
//   //   }
//   // }

//   // /**
//   //  * async createPipelineRetail
//   //  */
//   // public async createPipelineRetail(req: Request, res: Response) {
//   //   const company: Company = req.body
//   //   let randomCode: string = ''
//   //   let hasCode: Company | undefined = new Company()

//   //   do {
//   //     randomCode = '0000000000'.replace(/0/g, function () {
//   //       return (~~(Math.random() * 16)).toString(16)
//   //     })

//   //     hasCode = await getCustomRepository(CompanyRepository).findOne({
//   //       companyCode: randomCode,
//   //     })
//   //   } while (hasCode)
//   //   const findCompanyName = await getCustomRepository(CompanyRepository).findOne({
//   //     companyName: company.companyName,
//   //   })
//   //   if (!findCompanyName) {
//   //     company.companyCode = randomCode
//   //     company.retail.companyCode = randomCode
//   //     const customerStatus = new CustomerStatus()
//   //     customerStatus.customerStatusId = 3
//   //     company.companyType = 2
//   //     company.customerStatus = customerStatus
//   //     const result: Company | string | Response = await getCustomRepository(CompanyRepository).save(
//   //       company
//   //     )
//   //     return res.status(201).json({
//   //       message: `insert successfully`,
//   //       response: result,
//   //       responseCode: 201,
//   //     })
//   //   } else {
//   //     return res.status(202).json({
//   //       message: `company name is duplicate`,
//   //       responseCode: 202,
//   //     })
//   //   }
//   // }

//   // public async saveRetailCompany(req: Request, res: Response): Promise<Response> {
//   //   const company: Company = req.body
//   //   let randomCode: string = ''
//   //   let hasCode: Company | undefined = new Company()
//   //   do {
//   //     randomCode = '0000000000'.replace(/0/g, function () {
//   //       return (~~(Math.random() * 16)).toString(16)
//   //     })

//   //     hasCode = await getCustomRepository(CompanyRepository).findOne({
//   //       companyCode: randomCode,
//   //     })
//   //   } while (hasCode)

//   //   company.companyCode = randomCode

//   //   const oldCustomerStatus: CustomerStatus | undefined = await getCustomRepository(
//   //     CustomerStatusRepository
//   //   ).findOne(3)
//   //   if (!oldCustomerStatus) {
//   //     return res.status(404).json({
//   //       message: 'Customer Status not found',
//   //     })
//   //   }
//   //   company.customerStatus = oldCustomerStatus
//   //   const result: Company | string | Response = await getCustomRepository(CompanyRepository)
//   //     .saveRetailCompany(company)
//   //     .catch((err) => {
//   //       return res.status(500).json({
//   //         response: err,
//   //       })
//   //     })
//   //   return res.status(201).json({
//   //     message: `insert successfully`,
//   //     response: result,
//   //   })
//   // }

//   // public async findAllCompany(req: Request, res: Response, next: NextFunction) {
//   //   const result: Company[] = await getCustomRepository(CompanyRepository).findAllCompany()
//   //   return res.status(200).json({
//   //     response: result,
//   //   })
//   // }

//   // public async findAllCompanyByPaginate(req: Request, res: Response, next: NextFunction) {
//   //   const page: number = Number(req.query.page)
//   //   const pageSize: number = Number(req.query.pageSize)
//   //   const paginate: Paginate = await getCustomRepository(
//   //     CompanyRepository
//   //   ).findAllCompanyByPaginate(page, pageSize)
//   //   return res.status(200).json({
//   //     response: paginate,
//   //   })
//   // }
//   // public async findCompanyById(req: Request, res: Response, next: NextFunction) {
//   //   const { id } = req.params
//   //   const company: Company | undefined = await getCustomRepository(
//   //     CompanyRepository
//   //   ).findCompanyById(parseInt(id))
//   //   if (!company) {
//   //     return res.status(404).json({
//   //       message: `Company not found id ${id}`,
//   //     })
//   //   }
//   //   return res.status(200).json({
//   //     response: company,
//   //   })
//   // }

//   // public async findCompanyByCompanyCode(req: Request, res: Response, next: NextFunction) {
//   //   const { companyCode } = req.params
//   //   const company: Company | undefined = await getCustomRepository(
//   //     CompanyRepository
//   //   ).findCompanyByCompanyCode(companyCode)
//   //   if (!company) {
//   //     return res.status(404).json({
//   //       message: `Company not found company code ${companyCode}`,
//   //     })
//   //   }
//   //   return res.status(200).json({
//   //     response: company,
//   //   })
//   // }
//   // public async findCompanyByWholesaleType(req: Request, res: Response, next: NextFunction) {
//   //   const page: number = Number(req.query.page) || 0
//   //   const pageSize: number = Number(req.query.pageSize) || 0
//   //   const company: Company[] | undefined = await getCustomRepository(
//   //     CompanyRepository
//   //   ).findCompanyByType(CompanyType.Wholesale, page, pageSize)
//   //   if (!company) {
//   //     return res.status(404).json({
//   //       message: `Wholesale Company not found`,
//   //     })
//   //   }

//   //   return res.status(200).json({
//   //     response: company,
//   //   })
//   // }
//   // /**
//   //  *
//   //  * @param req
//   //  * @param res
//   //  * @param next
//   //  */
//   // public async findAllRetail(req: Request, res: Response, next: NextFunction) {
//   //   const saleId: number = Number(req.query.saleId) || 0
//   //   const page: number = Number(req.query.page) || 0
//   //   const pageSize: number = Number(req.query.pageSize) || 0
//   //   const company: Company[] | undefined = await getCustomRepository(
//   //     CompanyRepository
//   //   ).findCompanyByTypeSalePipeline(CompanyType.Retail, page, pageSize, saleId)
//   //   const resultNoPagination: Retail[] | undefined = await getCustomRepository(
//   //     RetailRepository
//   //   ).find({
//   //     where: { createdBy: saleId },
//   //     relations: ['company', 'company.companyContact'],
//   //     order: { retailId: 'DESC' },
//   //   })
//   //   if (!company) {
//   //     return res.status(404).json({
//   //       message: `Retail Company not found`,
//   //     })
//   //   }
//   //   return res.status(200).json({
//   //     response: company,
//   //     data: resultNoPagination,
//   //   })
//   // }

//   // public async findRetail(req: Request, res: Response, next: NextFunction) {
//   //   console.log('find retail')
//   //   const page: number = Number(req.query.page) || 0
//   //   const pageSize: number = Number(req.query.pageSize) || 0
//   //   const filter: number = Number(req.query.filter) || 0
//   //   const keyword: string = req.query.keyword
//   //   const company: Company[] | undefined = await getCustomRepository(
//   //     CompanyRepository
//   //   ).findCompanyByType(CompanyType.Retail, page, pageSize, filter, keyword)
//   //   if (!company?.length) {
//   //     return res.status(404).json({
//   //       message: `Retail Company not found`,
//   //     })
//   //   }
//   //   return res.status(200).json({
//   //     response: company,
//   //   })
//   // }

//   // public async findAllRetailerUserInCompany(req: Request, res: Response, next: NextFunction) {
//   //   let retail: Company[] | undefined = []
//   //   retail = await getCustomRepository(CompanyRepository).findRetailWhereUserInCompany()
//   //   retail?.filter((data) => data.user)
//   //   return res.status(200).json({
//   //     response: retail,
//   //   })
//   // }

//   // public async findRetailInWholesaleArea(req: Request, res: Response, next: NextFunction) {
//   //   const orderType = Number(req.query.orderType)
//   //   const sellerCompanyId = Number(req.query.companyId)
//   //   const page: number = Number(req.query.page) || 0
//   //   const pageSize: number = Number(req.query.pageSize) || 0
//   //   const company: Company | undefined = await getCustomRepository(
//   //     CompanyRepository
//   //   ).findCompanyById(sellerCompanyId)
//   //   let retail: Company[] | undefined = []
//   //   if (!company) {
//   //     return res.status(404).json({
//   //       message: `Wholesale Company not found`,
//   //     })
//   //   }
//   //   console.log('company.companyRegion:', company.companyRegion)
//   //   if (orderType == OrderType.EXPRESS) {
//   //     retail = await getCustomRepository(CompanyRepository).findRetailBySubDistrict(
//   //       company.subDistrict,
//   //       page,
//   //       pageSize
//   //     )
//   //   } else if (orderType == OrderType.REGULAR) {
//   //     retail = await getCustomRepository(CompanyRepository).findRetailByCompanyRegion(
//   //       company.companyRegion,
//   //       company.subDistrict,
//   //       page,
//   //       pageSize
//   //     )
//   //   }
//   //   retail?.filter((data) => data.user)
//   //   return res.status(200).json({
//   //     response: retail,
//   //   })
//   // }

//   // public async findRetailInWholesaleAreaWithNoRebate(
//   //   req: Request,
//   //   res: Response,
//   //   next: NextFunction
//   // ) {
//   //   const orderType = Number(req.query.orderType)
//   //   const sellerCompanyId = Number(req.query.companyId)
//   //   const page: number = Number(req.query.page) || 0
//   //   const pageSize: number = Number(req.query.pageSize) || 0
//   //   const company: Company | undefined = await getCustomRepository(
//   //     CompanyRepository
//   //   ).findCompanyById(sellerCompanyId)
//   //   let retail: Company[] | undefined = []
//   //   if (!company) {
//   //     return res.status(404).json({
//   //       message: `Wholesale Company not found`,
//   //     })
//   //   }
//   //   console.log('company.companyRegion:', company.companyRegion)
//   //   if (orderType == OrderType.EXPRESS) {
//   //     retail = await getCustomRepository(CompanyRepository).findRetailBySubDistrict(
//   //       company.subDistrict,
//   //       page,
//   //       pageSize
//   //     )
//   //   } else if (orderType == OrderType.REGULAR) {
//   //     retail = await getCustomRepository(CompanyRepository).findRetailByCompanyRegion(
//   //       company.companyRegion,
//   //       company.subDistrict,
//   //       page,
//   //       pageSize
//   //     )
//   //   }
//   //   console.log(retail?.map((data) => data.companyId))
//   //   const getRetailWithNoRebate = await getCustomRepository(
//   //     PromotionSettingsRepository
//   //   ).findRetailInWholesaleAreaWithNoRebate(retail, sellerCompanyId)
//   //   console.log(getRetailWithNoRebate?.length)
//   //   return res.status(200).json({
//   //     response: getRetailWithNoRebate,
//   //   })
//   // }
//   // /**
//   //  *
//   //  * @param req
//   //  * @param res
//   //  * @param next
//   //  */
//   // public async findWholesaleTier1(req: Request, res: Response, next: NextFunction) {
//   //   const tier: number = 1
//   //   const company: Company[] | undefined = await getCustomRepository(
//   //     CompanyRepository
//   //   ).findWholesaleByTier(tier)
//   //   if (!company) {
//   //     return res.status(404).json({
//   //       message: `Wholesale Company tier ${tier} not found`,
//   //     })
//   //   }
//   //   Sentry.captureMessage(`tier -> ${tier}`)
//   //   company.map((d, i) => {
//   //     Sentry.captureMessage(`${i} -> ${d.companyName}`)
//   //     console.log(`${i} -> ${d.companyName}`)
//   //   })
//   //   return res.status(200).json({
//   //     response: company,
//   //   })
//   // }
//   // /**
//   //  *
//   //  * @param req
//   //  * @param res
//   //  * @param next
//   //  */
//   // public async findWholesaleTier2(req: Request, res: Response, next: NextFunction) {
//   //   const tier: number = 2
//   //   const company: Company[] | undefined = await getCustomRepository(
//   //     CompanyRepository
//   //   ).findWholesaleByTier(tier)
//   //   if (!company) {
//   //     return res.status(404).json({
//   //       message: `Wholesale Company tier ${tier} not found`,
//   //     })
//   //   }
//   //   return res.status(200).json({
//   //     response: company,
//   //   })
//   // }
//   // public async updateCompany(req: Request, res: Response, next: NextFunction): Promise<Response> {
//   //   const newCompany = req.body
//   //   const { id } = req.params
//   //   const oldCompany = await getCustomRepository(CompanyRepository).findOne({
//   //     where: { companyId: id },
//   //   })
//   //   if (!oldCompany) {
//   //     return res.status(404).json({
//   //       message: `Company not found id ${id}`,
//   //     })
//   //   }
//   //   let isSaleCode: SaleVerificationCode | undefined
//   //   let isSaleCodeIsExpireDate: SaleVerificationCode | undefined
//   //   let isSaleCodeInActive: SaleVerificationCode | undefined
//   //   if (newCompany.salesVerifictionCode) {
//   //     const code = newCompany.salesVerifictionCode
//   //     isSaleCodeInActive = await getCustomRepository(
//   //       SaleVerificationCodeRepository
//   //     ).findSaleCodeInActive(code)
//   //     if (isSaleCodeInActive) {
//   //       return res.status(200).send({
//   //         error: 'sales verifiction code is inactive',
//   //         response: 401,
//   //       })
//   //     }
//   //     isSaleCode = await getCustomRepository(SaleVerificationCodeRepository).findSaleCode(code)
//   //     if (!isSaleCode) {
//   //       return res.status(200).send({
//   //         error: 'sales verifiction code not found',
//   //         response: 402,
//   //       })
//   //     }
//   //     isSaleCodeIsExpireDate = await getCustomRepository(
//   //       SaleVerificationCodeRepository
//   //     ).findSaleCodeIsExpireDate(code)
//   //     if (!isSaleCodeIsExpireDate) {
//   //       return res.status(200).send({
//   //         error: 'sales verifiction code expire date',
//   //         response: 403,
//   //       })
//   //     }
//   //   }
//   //   const result = await getCustomRepository(CompanyRepository)
//   //     .updateCompany(oldCompany, newCompany, isSaleCodeIsExpireDate?.createBy)
//   //     .catch((err) => {
//   //       return res.status(500).json({
//   //         message: err,
//   //       })
//   //     })
//   //   isSaleCode?.active = 0
//   //   await getCustomRepository(SaleVerificationCodeRepository).updateSaleVerificationCode(isSaleCode)

//   //   Object.assign(result, { companyCode: oldCompany.companyCode })
//   //   return res.status(200).json({
//   //     message: `update successfully ID ${id}`,
//   //     response: result,
//   //   })
//   // }

//   // public async updateWholesaleCompany(req: Request, res: Response): Promise<Response> {
//   //   const newCompany = req.body
//   //   const { id } = req.params
//   //   const oldCompany = await getCustomRepository(CompanyRepository).findOne({
//   //     relations: [
//   //       'territory',
//   //       'wholesale',
//   //       'wholesale.deestoneSalesName',
//   //       'wholesale.wholesaleTierOneName',
//   //       'wholesale.wholesaleTierOneSalesName',
//   //       'wholesale.wholesaleWarehouse',
//   //       'wholesale.sellingBrand',
//   //     ],
//   //     where: { companyId: id },
//   //   })
//   //   console.log('newCompany', newCompany)
//   //   // console.log(oldCompany?.wholesale.sellingBrand)
//   //   if (!oldCompany) {
//   //     return res.status(404).json({
//   //       message: `Company not found id ${id}`,
//   //     })
//   //   }
//   //   if (newCompany.salesVerifictionCode) {
//   //     const code = newCompany.salesVerifictionCode
//   //     const isSaleCode = await getCustomRepository(UserRepository).findSaleCode(code)
//   //     if (!isSaleCode) {
//   //       return res.status(200).send({
//   //         error: 'sales verifiction code not found',
//   //         response: 'not found',
//   //       })
//   //     }
//   //   }
//   //   const findCompanyName = await getCustomRepository(CompanyRepository)
//   //     .createQueryBuilder('company')
//   //     .where('company.companyName =:companyName and company.companyId != :companyId', {
//   //       companyName: newCompany.companyName,
//   //       companyId: oldCompany.companyId,
//   //     })
//   //     .getOne()
//   //   console.log('findCompanyName::', findCompanyName)
//   //   if (!findCompanyName) {
//   //     const result = await getCustomRepository(CompanyRepository)
//   //       .updateWholesaleCompany(oldCompany, newCompany)
//   //       .catch((err) => {
//   //         return res.status(500).json({
//   //           message: err,
//   //         })
//   //       })

//   //     Object.assign(result, { companyCode: oldCompany.companyCode })
//   //     return res.status(200).json({
//   //       message: `update successfully ID ${id}`,
//   //       response: result,
//   //       responseCode: 201,
//   //     })
//   //   } else {
//   //     return res.status(202).json({
//   //       message: `company name is duplicate`,
//   //       responseCode: 202,
//   //     })
//   //   }
//   // }
//   // public async getRetailByCompanyId(req: Request, res: Response, next: NextFunction) {
//   //   const retailId = req.body.retailId
//   //   const companyId = req.body.companyId
//   //   const SUCCESS_MESSAGE = 'ดึงข้อมูลสำเร็จ'
//   //   const ERROR_MESSAGE_NOT_FOUND_RETAIL = 'ไม่พบข้อมูล retail'
//   //   const retail: Retail | undefined = await getCustomRepository(RetailRepository).findById(
//   //     parseInt(retailId),
//   //     parseInt(companyId)
//   //   )
//   //   console.log(retail)
//   //   if (retail) {
//   //     return res.status(200).json({
//   //       response: {
//   //         responseCode: 200,
//   //         responseMessage: SUCCESS_MESSAGE,
//   //         data: retail,
//   //       },
//   //     })
//   //   } else {
//   //     return res.status(404).json({
//   //       response: {
//   //         responseCode: 200,
//   //         responseMessage: ERROR_MESSAGE_NOT_FOUND_RETAIL,
//   //         data: [],
//   //       },
//   //     })
//   //   }
//   // }
//   // public async getRetailDetail(req: Request, res: Response, next: NextFunction) {
//   //   const companyId = Number(req.params.companyId)
//   //   const SUCCESS_MESSAGE = 'ดึงข้อมูลสำเร็จ'
//   //   const ERROR_MESSAGE_NOT_FOUND_RETAIL = 'ไม่พบข้อมูล retail'
//   //   const company: Company | undefined = await getCustomRepository(
//   //     CompanyRepository
//   //   ).findRetailByCompanyId(companyId)
//   //   console.log(company)
//   //   if (company) {
//   //     return res.status(200).json({
//   //       message: SUCCESS_MESSAGE,
//   //       response: company,
//   //     })
//   //   } else {
//   //     return res.status(404).json({
//   //       message: ERROR_MESSAGE_NOT_FOUND_RETAIL,
//   //     })
//   //   }
//   // }
// }

// export const companyController = new CompanyController()
