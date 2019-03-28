module.exports = (message) => {
  let arr = message.split('\n');
  let msg = arr.map((v=> v.split(':')[1]));
  msg[0] = arr[0].split(':')[2];

  return msg
  
}

// [ 'SequelizeValidationError: Validation error: Password minimal 8 karakter,',
//   'Validation error: Nama tidak boleh angka,',
//   'Validation error: Nama tidak boleh angka,',
//   'Validation error: Sudah ada user dengan email tersebut,',
//   'Validation error: Username minimum 3 karakter, maksimum 16 karakter' ]