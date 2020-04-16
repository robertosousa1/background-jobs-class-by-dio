import Mail from '../lib/Mail';

export default {
  key: 'RegistrationMail',
  options: {
    delay: 5000,
    priority: 3,
    repeat: {
      every: 1,
      limit: 100
    },
    lifo: true
  },
  async handle({ data }) {
    const { user } = data;

    await Mail.sendMail({
      from: 'DIO <contato@dio.com.br>',
      to: `${user.name} <${user.email}>`,
      subject: 'Cadastro de usuário',
      html: `Olá, ${user.name}, bem-vindo a DIO.`
    });
  },
};