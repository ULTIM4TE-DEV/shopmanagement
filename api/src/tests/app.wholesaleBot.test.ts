

const userId = 'U0232e904deab9d6a139648071ee24360'
const wrongMessage = '1234'
const notUser = '12345'
const userToken = {
  type: 'message',
  replyToken: '59717f0567934150913fcdd06b1c41bf',
  source: { userId: 'U0232e904deab9d6a139648071ee24360', type: 'user' },
  timestamp: 1581391196458,
  mode: 'active',
  message: { type: 'text', id: '11410001125099', text: 'จัดการคำสั่งซื้อ' },
}
const link = 'https://claris-portal.artisandigital.tech/'

const wholesaleResponse = (reply_token: string) => {
  if (reply_token == 'จัดการคำสั่งซื้อ') {
    return reply
  } else {
    return wrongReply
  }
}

const registerResponse = (reply_token: string, message: string) => {
  if (reply_token == 'U0232e904deab9d6a139648071ee24360') {
    if (message == 'จัดการคำสั่งซื้อ') {
      return reply
    } else {
      return wrongReply
    }
  } else {
    return registerReply
  }
}

const registerReply = {
  type: 'template',
  altText: 'ลงทะเบียนสมาชิก',
  template: {
    backgroundColor: '#000',
    type: 'buttons',
    title: 'กรุณาลงทะเบียน',
    text: `กรุณาสมัครสมาชิกก่อนใช้บริการ`,
    actions: [
      {
        type: 'uri',
        label: 'สมัครสมาชิก',
        uri: link,
      },
    ],
  },
}
// const token = await tokenManagement.saveToken(userId)
const reply = [
  {
    type: 'imagemap',
    baseUrl: 'https://i.ibb.co/8jsbRc7/Order-Management-1040.jpg',
    altText: 'เมนูจัดการคำสั่งซื้อ',
    baseSize: {
      width: 1040,
      height: 1092,
    },
    actions: [
      {
        type: 'uri',
        area: {
          x: 53,
          y: 52,
          width: 933,
          height: 212,
        },
        linkUri: link + `history-order?id=${userId}&mode=wholesale`,
      },
    ],
  },
]

const wrongReply = [
  {
    type: 'text',
    text: 'ขออภัย กรุณาพิมพ์ใหม่',
  },
]

describe('Whole sale bot response', () => {
  it('should return user object', async () => {
    expect(userToken).toEqual(userToken)
  })
  it('should check return for replyToken', async () => {
    expect(userToken.replyToken).toBe('59717f0567934150913fcdd06b1c41bf')
  })
  it("should return reply object to message.text = 'จัดการคำสั่งซื้อ'", async () => {
    expect(wholesaleResponse(userToken.message.text)).toBe(reply)
  })
  it("should return reply object to message.text != 'จัดการคำสั่งซื้อ'", async () => {
    expect(wholesaleResponse(wrongMessage)).toBe(wrongReply)
  })
  it('should return reply object register button to user if userId = null', async () => {
    expect(registerResponse(notUser, wrongMessage)).toBe(registerReply)
  })
  it('should return reply object register button to user if userId != null', async () => {
    expect(registerResponse(userToken.source.userId, userToken.message.text)).toBe(reply)
  })
})
