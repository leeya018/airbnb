let exportUsers1 = async db => {
  try {
    let data = await db.collection('users').insertMany(
      [{
        firstName: 'ida',
        lastName: 'murphy',
        username: '1',
        password: '1',
        imageUrl: 'https://randomuser.me/api/portraits/thumb/women/10.jpg'
      },
      {
        firstName: 'cindy',
        lastName: 'stanley',
        username: 'beautifulbutterfly653',
        password: 'philip',
        imageUrl: 'https://randomuser.me/api/portraits/thumb/women/72.jpg'
      },
      {
        firstName: 'guy',
        lastName: 'cox',
        username: 'crazywolf829',
        password: 'silence',
        imageUrl: 'https://randomuser.me/api/portraits/thumb/men/91.jpg'
      },
      {
        firstName: 'alfredo',
        lastName: 'hoffman',
        username: 'ticklishtiger528',
        password: 'nirvana',
        imageUrl: 'https://randomuser.me/api/portraits/thumb/men/35.jpg'
      },
      {
        firstName: 'steven',
        lastName: 'perez',
        password: 'beretta',
        imageUrl: 'https://randomuser.me/api/portraits/thumb/men/67.jpg'
      }
         ]   );

    console.log('data1  :', data);
  } catch (e) {
    console.log(e, 'export users err');
  }
};

module.exports = exportUsers1;
