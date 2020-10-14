let exportHomes1 = async db => {
  try {
    let data = await db.collection('homes').insertMany([
      {
        title: "Comfy Artist's Home",
        type: 'Private room in apartment',
        generalDesc:
          'I live in the heart of Camden Town, in a late Georgian terrace of houses within a Conservation area, right in the centre of London. My flat is richly decorated which reflects the work that I do as a Textile Artist. My walls are covered with my choice of vintage finds, antiques and art. My Flat on 1st and 2nd Floor 16 sq mtrs: SITTING ROOM/BEDROOM: You will be staying (with me) in my sitting room on a comfy sofa bed. You will get complete privacy during your stay in my sitting room. This large sunny room has two big windows with wooden shutters and a big fire place. There will be fresh linen, a choice of pillows, towels, big duvets and hot water bottles. There is a hanger rail for your clothes.',
        guestAccess:
          "You have free Wi Fi, TV, DVD and information about what is going on in London, with maps and guidebooks. KITCHEN: You can use my kitchen whilst staying with me. There is unlimited tea and coffee, a washing machine, dishwasher, microwave, a fridge, iron and ironing board. I do not have an electric dryer - I hang clothes on a dryer in the hallway. **I don't supply breakfast but McDonald's (1 minute walk) has great food and Mario's is around the corner (with his own mini Art gallery).",
        others: '',
        price: 150,
        amenities: ['TV', 'laptop', 'shower', 'wifi'],
        imageUrl: 'https://walhalla.com/assets/img/jumbotron/v48-p107.jpg',
        owner: {
          imageUrl: 'https://s3.amazonaws.com/uifaces/faces/twitter/samihah/128.jpg',
          name: 'Lola'
        },
        address: {
          country: 'United Kingdom',
          city: 'London',
          street: 'Camden',
          number: '12',
          lat: 31.0461,
          lng: 34.8516
        },
        theSpace: {
          description: 'In a late Georgian terrace of houses within a Conservation area, right in the centre of London',
          guests: 5,
          beds: 1,
          bedrooms: 1
        },
        reviews: [
          {
            id: 1,
            title: 'Nice clean room',
            name: 'Lea',
            content: 'consequat nulla nisl nunc nisl duis bibendum venenatis turpis enim blandit mi in',
            userImageUrl: 'https://s3.amazonaws.com/uifaces/faces/twitter/h1brd/128.jpg',
            rating: 3,
            date: 'DECEMBER 4 2017'
          },
          {
            id: 2,
            title: 'Decent place to sleep',
            name: 'David',
            content: 'justo in hac habitasse platea dictumst etiam cursus urna ut tellus ut erat id vulputate',
            userImageUrl: 'https://s3.amazonaws.com/uifaces/faces/twitter/dutchnadia/128.jpg',
            rating: 4,
            date: 'May 19 2017'
          }
        ],
        occupancy: [
          '21/10/2017',
          '22/10/2017',
          '23/10/2017',
          '24/10/2017',
          '31/10/2017',
          '01/11/2017',
          '02/11/2017',
          '03/11/2017',
          '11/11/2017',
          '12/11/2017',
          '13/11/2017',
          '19/11/2017',
          '20/11/2017',
          '21/11/2017',
          '01/12/2017',
          '02/12/2017',
          '03/12/2017',
          '04/12/2017',
          '05/12/2017',
          '13/12/2017',
          '14/12/2017',
          '15/12/2017',
          '31/12/2017',
          '01/01/2018',
          '02/01/2018',
          '03/01/2018',
          '18/01/2018',
          '19/01/2018',
          '20/01/2018',
          '21/01/2018',
          '22/01/2018',
          '23/01/2018',
          '24/01/2018',
          '05/02/2018',
          '06/02/2018',
          '07/02/2018',
          '08/02/2018',
          '09/02/2018',
          '10/02/2018',
          '11/02/2018',
          '23/02/2018',
          '24/02/2018',
          '25/02/2018',
          '26/02/2018',
          '27/02/2018',
          '28/02/2018',
          '01/03/2018',
          '19/03/2018',
          '20/03/2018',
          '21/03/2018',
          '22/03/2018',
          '23/03/2018',
          '24/03/2018',
          '13/04/2018',
          '14/04/2018',
          '15/04/2018',
          '16/04/2018',
          '17/04/2018',
          '04/05/2018',
          '05/05/2018',
          '06/05/2018',
          '07/05/2018',
          '08/05/2018',
          '21/05/2018',
          '22/05/2018',
          '23/05/2018',
          '24/05/2018',
          '07/06/2018',
          '08/06/2018',
          '09/06/2018',
          '10/06/2018',
          '11/06/2018',
          '24/06/2018',
          '25/06/2018',
          '26/06/2018',
          '27/06/2018',
          '28/06/2018',
          '29/06/2018',
          '12/07/2018',
          '13/07/2018',
          '14/07/2018',
          '15/07/2018',
          '16/07/2018',
          '03/08/2018',
          '04/08/2018',
          '05/08/2018',
          '06/08/2018',
          '07/08/2018',
          '08/08/2018',
          '21/08/2018',
          '22/08/2018',
          '23/08/2018',
          '24/08/2018',
          '25/08/2018',
          '26/08/2018',
          '15/09/2018',
          '16/09/2018',
          '17/09/2018',
          '18/09/2018',
          '19/09/2018',
          '20/09/2018',
          '26/09/2018',
          '27/09/2018',
          '28/09/2018',
          '29/09/2018',
          '30/09/2018'
        ]
      },
      {
        title: 'Nice students apartment',
        type: 'Private room in apartment',
        generalDesc:
          'The complex used to be the old bakery of Oia and it was recently restored with respect to the unique local architecture creating a remarkable ekistic complex of a unique sculptural quality. The plasticity of the forms,the use of local techniques, the built in beds and the antique furniture together with modern amenities strike the right balance between sophistication and coziness.',
        guestAccess:
          'Me or my husband John we will usually welcome you to the house. I am always available to answer all of your questions via messages or emails and at the house you will find a local mobile that you can use it to call us.',
        others: '',
        price: 250,
        amenities: ['television', 'laptop', 'shower', 'wifi'],
        imageUrl: 'https://publiaz.ch/wp-content/uploads/2017/05/Jumbotron-1600x720-SwissRE.jpg',
        owner: {
          imageUrl: 'https://s3.amazonaws.com/uifaces/faces/twitter/samihah/128.jpg',
          name: 'Mona'
        },
        address: {
          country: 'United Kingdom',
          city: 'London',
          street: 'Abby Road',
          number: '23',
          lat: 31.0461,
          lng: 33.8516
        },
        theSpace: {
          description:
            'This cave house, hanging on the cliffs of the caldera, is part of a traditional synthesis of houses owned by a family of architects',
          guests: 2,
          beds: 2,
          bedrooms: 1
        },
        reviews: [
          {
            id: 1,
            title: 'Very small but clean room',
            name: 'Lea',
            content: 'Consequat nulla nisl nunc nisl duis bibendum venenatis turpis enim blandit mi in',
            userImageUrl: 'https://s3.amazonaws.com/uifaces/faces/twitter/h1brd/128.jpg',
            rating: 3,
            date: 'DECEMBER 19 2017'
          },
          {
            id: 2,
            title: 'Nice couple, good vibes',
            name: 'David',
            content: 'Justo in hac habitasse platea dictumst etiam cursus urna ut tellus ut erat id vulputate',
            userImageUrl: 'https://s3.amazonaws.com/uifaces/faces/twitter/dutchnadia/128.jpg',
            rating: 4,
            date: 'May 25 2017'
          }
        ],
        occupancy: [
          '21/10/2017',
          '22/10/2017',
          '23/10/2017',
          '24/10/2017',
          '31/10/2017',
          '01/11/2017',
          '02/11/2017',
          '03/11/2017',
          '11/11/2017',
          '12/11/2017',
          '13/11/2017',
          '19/11/2017',
          '20/11/2017',
          '21/11/2017',
          '01/12/2017',
          '02/12/2017',
          '03/12/2017',
          '04/12/2017',
          '05/12/2017',
          '13/12/2017',
          '14/12/2017',
          '15/12/2017',
          '31/12/2017',
          '01/01/2018',
          '02/01/2018',
          '03/01/2018',
          '18/01/2018',
          '19/01/2018',
          '20/01/2018',
          '21/01/2018',
          '22/01/2018',
          '23/01/2018',
          '24/01/2018',
          '05/02/2018',
          '06/02/2018',
          '07/02/2018',
          '08/02/2018',
          '09/02/2018',
          '10/02/2018',
          '11/02/2018',
          '23/02/2018',
          '24/02/2018',
          '25/02/2018',
          '26/02/2018',
          '27/02/2018',
          '28/02/2018',
          '01/03/2018',
          '19/03/2018',
          '20/03/2018',
          '21/03/2018',
          '22/03/2018',
          '23/03/2018',
          '24/03/2018',
          '13/04/2018',
          '14/04/2018',
          '15/04/2018',
          '16/04/2018',
          '17/04/2018',
          '04/05/2018',
          '05/05/2018',
          '06/05/2018',
          '07/05/2018',
          '08/05/2018',
          '21/05/2018',
          '22/05/2018',
          '23/05/2018',
          '24/05/2018',
          '07/06/2018',
          '08/06/2018',
          '09/06/2018',
          '10/06/2018',
          '11/06/2018',
          '24/06/2018',
          '25/06/2018',
          '26/06/2018',
          '27/06/2018',
          '28/06/2018',
          '29/06/2018',
          '12/07/2018',
          '13/07/2018',
          '14/07/2018',
          '15/07/2018',
          '16/07/2018',
          '03/08/2018',
          '04/08/2018',
          '05/08/2018',
          '06/08/2018',
          '07/08/2018',
          '08/08/2018',
          '21/08/2018',
          '22/08/2018',
          '23/08/2018',
          '24/08/2018',
          '25/08/2018',
          '26/08/2018',
          '15/09/2018',
          '16/09/2018',
          '17/09/2018',
          '18/09/2018',
          '19/09/2018',
          '20/09/2018',
          '26/09/2018',
          '27/09/2018',
          '28/09/2018',
          '29/09/2018',
          '30/09/2018'
        ]
      },
      {
        title: 'Dreamy Tropical Tree House',
        type: 'Private room in apartment',
        generalDesc:
          'The complex used to be the old bakery of Oia and it was recently restored with respect to the unique local architecture creating a remarkable ekistic complex of a unique sculptural quality. The plasticity of the forms,the use of local techniques, the built in beds and the antique furniture together with modern amenities strike the right balance between sophistication and coziness.',
        guestAccess:
          'Me or my husband John we will usually welcome you to the house. I am always available to answer all of your questions via messages or emails and at the house you will find a local mobile that you can use it to call us.',
        others: '',
        price: 250,
        amenities: ['television', 'laptop', 'shower', 'wifi'],
        imageUrl:
          'http://4.bp.blogspot.com/-xQBBEM0L8_c/VNS_vItoZmI/AAAAAAAEjdI/ULmnU00-eeQ/s1600/210-Chambre-1200x800.jpg',
        owner: {
          imageUrl: 'https://s3.amazonaws.com/uifaces/faces/twitter/samihah/128.jpg',
          name: 'Mona'
        },
        address: {
          country: 'United Kingdom',
          city: 'London',
          street: 'Abby Road',
          number: '23',
          lat: 32.0461,
          lng: 34.8516
        },
        theSpace: {
          description:
            'This cave house, hanging on the cliffs of the caldera, is part of a traditional synthesis of houses owned by a family of architects',
          guests: 2,
          beds: 2,
          bedrooms: 1
        },
        reviews: [
          {
            id: 1,
            title: 'Very small but clean room',
            name: 'Lea',
            content: 'Consequat nulla nisl nunc nisl duis bibendum venenatis turpis enim blandit mi in',
            userImageUrl: 'https://s3.amazonaws.com/uifaces/faces/twitter/h1brd/128.jpg',
            rating: 3,
            date: 'DECEMBER 19 2017'
          },
          {
            id: 2,
            title: 'Nice couple, good vibes',
            name: 'David',
            content: 'Justo in hac habitasse platea dictumst etiam cursus urna ut tellus ut erat id vulputate',
            userImageUrl: 'https://s3.amazonaws.com/uifaces/faces/twitter/dutchnadia/128.jpg',
            rating: 4,
            date: 'May 25 2017'
          }
        ],
        occupancy: [
          '21/10/2017',
          '22/10/2017',
          '23/10/2017',
          '24/10/2017',
          '31/10/2017',
          '01/11/2017',
          '02/11/2017',
          '03/11/2017',
          '11/11/2017',
          '12/11/2017',
          '13/11/2017',
          '19/11/2017',
          '20/11/2017',
          '21/11/2017',
          '01/12/2017',
          '02/12/2017',
          '03/12/2017',
          '04/12/2017',
          '05/12/2017',
          '13/12/2017',
          '14/12/2017',
          '15/12/2017',
          '31/12/2017',
          '01/01/2018',
          '02/01/2018',
          '03/01/2018',
          '18/01/2018',
          '19/01/2018',
          '20/01/2018',
          '21/01/2018',
          '22/01/2018',
          '23/01/2018',
          '24/01/2018',
          '05/02/2018',
          '06/02/2018',
          '07/02/2018',
          '08/02/2018',
          '09/02/2018',
          '10/02/2018',
          '11/02/2018',
          '23/02/2018',
          '24/02/2018',
          '25/02/2018',
          '26/02/2018',
          '27/02/2018',
          '28/02/2018',
          '01/03/2018',
          '19/03/2018',
          '20/03/2018',
          '21/03/2018',
          '22/03/2018',
          '23/03/2018',
          '24/03/2018',
          '13/04/2018',
          '14/04/2018',
          '15/04/2018',
          '16/04/2018',
          '17/04/2018',
          '04/05/2018',
          '05/05/2018',
          '06/05/2018',
          '07/05/2018',
          '08/05/2018',
          '21/05/2018',
          '22/05/2018',
          '23/05/2018',
          '24/05/2018',
          '07/06/2018',
          '08/06/2018',
          '09/06/2018',
          '10/06/2018',
          '11/06/2018',
          '24/06/2018',
          '25/06/2018',
          '26/06/2018',
          '27/06/2018',
          '28/06/2018',
          '29/06/2018',
          '12/07/2018',
          '13/07/2018',
          '14/07/2018',
          '15/07/2018',
          '16/07/2018',
          '03/08/2018',
          '04/08/2018',
          '05/08/2018',
          '06/08/2018',
          '07/08/2018',
          '08/08/2018',
          '21/08/2018',
          '22/08/2018',
          '23/08/2018',
          '24/08/2018',
          '25/08/2018',
          '26/08/2018',
          '15/09/2018',
          '16/09/2018',
          '17/09/2018',
          '18/09/2018',
          '19/09/2018',
          '20/09/2018',
          '26/09/2018',
          '27/09/2018',
          '28/09/2018',
          '29/09/2018',
          '30/09/2018'
        ]
      },
      {
        title: 'Amazing view in the city',
        type: 'Private room in apartment',
        generalDesc:
          'The complex used to be the old bakery of Oia and it was recently restored with respect to the unique local architecture creating a remarkable ekistic complex of a unique sculptural quality. The plasticity of the forms,the use of local techniques, the built in beds and the antique furniture together with modern amenities strike the right balance between sophistication and coziness.',
        guestAccess:
          'Me or my husband John we will usually welcome you to the house. I am always available to answer all of your questions via messages or emails and at the house you will find a local mobile that you can use it to call us.',
        others: '',
        price: 250,
        amenities: ['television', 'laptop', 'shower', 'wifi'],
        imageUrl: 'http://www.caseineuropa.it/caseinflorida/fp-content/images/rx-10099728_18.jpg',
        owner: {
          imageUrl: 'https://s3.amazonaws.com/uifaces/faces/twitter/samihah/128.jpg',
          name: 'Mona'
        },
        address: {
          country: 'United Kingdom',
          city: 'London',
          street: 'Abby Road',
          number: '23',
          lat: 31.0461,
          lng: 34.83213
        },
        theSpace: {
          description:
            'This cave house, hanging on the cliffs of the caldera, is part of a traditional synthesis of houses owned by a family of architects',
          guests: 2,
          beds: 2,
          bedrooms: 1
        },
        reviews: [
          {
            id: 1,
            title: 'Very small but clean room',
            name: 'Lea',
            content: 'Consequat nulla nisl nunc nisl duis bibendum venenatis turpis enim blandit mi in',
            userImageUrl: 'https://s3.amazonaws.com/uifaces/faces/twitter/h1brd/128.jpg',
            rating: 3,
            date: 'DECEMBER 19 2017'
          },
          {
            id: 2,
            title: 'Nice couple, good vibes',
            name: 'David',
            content: 'Justo in hac habitasse platea dictumst etiam cursus urna ut tellus ut erat id vulputate',
            userImageUrl: 'https://s3.amazonaws.com/uifaces/faces/twitter/dutchnadia/128.jpg',
            rating: 4,
            date: 'May 25 2017'
          }
        ],
        occupancy: [
          '21/10/2017',
          '22/10/2017',
          '23/10/2017',
          '24/10/2017',
          '31/10/2017',
          '01/11/2017',
          '02/11/2017',
          '03/11/2017',
          '11/11/2017',
          '12/11/2017',
          '13/11/2017',
          '19/11/2017',
          '20/11/2017',
          '21/11/2017',
          '01/12/2017',
          '02/12/2017',
          '03/12/2017',
          '04/12/2017',
          '05/12/2017',
          '13/12/2017',
          '14/12/2017',
          '15/12/2017',
          '31/12/2017',
          '01/01/2018',
          '02/01/2018',
          '03/01/2018',
          '18/01/2018',
          '19/01/2018',
          '20/01/2018',
          '21/01/2018',
          '22/01/2018',
          '23/01/2018',
          '24/01/2018',
          '05/02/2018',
          '06/02/2018',
          '07/02/2018',
          '08/02/2018',
          '09/02/2018',
          '10/02/2018',
          '11/02/2018',
          '23/02/2018',
          '24/02/2018',
          '25/02/2018',
          '26/02/2018',
          '27/02/2018',
          '28/02/2018',
          '01/03/2018',
          '19/03/2018',
          '20/03/2018',
          '21/03/2018',
          '22/03/2018',
          '23/03/2018',
          '24/03/2018',
          '13/04/2018',
          '14/04/2018',
          '15/04/2018',
          '16/04/2018',
          '17/04/2018',
          '04/05/2018',
          '05/05/2018',
          '06/05/2018',
          '07/05/2018',
          '08/05/2018',
          '21/05/2018',
          '22/05/2018',
          '23/05/2018',
          '24/05/2018',
          '07/06/2018',
          '08/06/2018',
          '09/06/2018',
          '10/06/2018',
          '11/06/2018',
          '24/06/2018',
          '25/06/2018',
          '26/06/2018',
          '27/06/2018',
          '28/06/2018',
          '29/06/2018',
          '12/07/2018',
          '13/07/2018',
          '14/07/2018',
          '15/07/2018',
          '16/07/2018',
          '03/08/2018',
          '04/08/2018',
          '05/08/2018',
          '06/08/2018',
          '07/08/2018',
          '08/08/2018',
          '21/08/2018',
          '22/08/2018',
          '23/08/2018',
          '24/08/2018',
          '25/08/2018',
          '26/08/2018',
          '15/09/2018',
          '16/09/2018',
          '17/09/2018',
          '18/09/2018',
          '19/09/2018',
          '20/09/2018',
          '26/09/2018',
          '27/09/2018',
          '28/09/2018',
          '29/09/2018',
          '30/09/2018'
        ]
      },
      {
        title: 'West side in the center',
        type: 'Private room in apartment',
        generalDesc:
          'The complex used to be the old bakery of Oia and it was recently restored with respect to the unique local architecture creating a remarkable ekistic complex of a unique sculptural quality. The plasticity of the forms,the use of local techniques, the built in beds and the antique furniture together with modern amenities strike the right balance between sophistication and coziness.',
        guestAccess:
          'Me or my husband John we will usually welcome you to the house. I am always available to answer all of your questions via messages or emails and at the house you will find a local mobile that you can use it to call us.',
        others: '',
        price: 250,
        amenities: ['television', 'laptop', 'shower', 'wifi'],
        imageUrl: 'https://walhalla.com/assets/img/jumbotron/v46-p429.jpg',
        owner: {
          imageUrl: 'https://s3.amazonaws.com/uifaces/faces/twitter/samihah/128.jpg',
          name: 'Mona'
        },
        address: {
          country: 'United Kingdom',
          city: 'Paris',
          street: 'Abby Road',
          number: '23',
          lat: 31.432,
          lng: 34.83213
        },
        theSpace: {
          description:
            'This cave house, hanging on the cliffs of the caldera, is part of a traditional synthesis of houses owned by a family of architects',
          guests: 2,
          beds: 2,
          bedrooms: 1
        },
        reviews: [
          {
            id: 1,
            title: 'Very small but clean room',
            name: 'Lea',
            content: 'Consequat nulla nisl nunc nisl duis bibendum venenatis turpis enim blandit mi in',
            userImageUrl: 'https://s3.amazonaws.com/uifaces/faces/twitter/h1brd/128.jpg',
            rating: 3,
            date: 'DECEMBER 19 2017'
          },
          {
            id: 2,
            title: 'Nice couple, good vibes',
            name: 'David',
            content: 'Justo in hac habitasse platea dictumst etiam cursus urna ut tellus ut erat id vulputate',
            userImageUrl: 'https://s3.amazonaws.com/uifaces/faces/twitter/dutchnadia/128.jpg',
            rating: 4,
            date: 'May 25 2017'
          }
        ],
        occupancy: [
          '21/10/2017',
          '22/10/2017',
          '23/10/2017',
          '24/10/2017',
          '31/10/2017',
          '01/11/2017',
          '02/11/2017',
          '03/11/2017',
          '11/11/2017',
          '12/11/2017',
          '13/11/2017',
          '19/11/2017',
          '20/11/2017',
          '21/11/2017',
          '01/12/2017',
          '02/12/2017',
          '03/12/2017',
          '04/12/2017',
          '05/12/2017',
          '13/12/2017',
          '14/12/2017',
          '15/12/2017',
          '31/12/2017',
          '01/01/2018',
          '02/01/2018',
          '03/01/2018',
          '18/01/2018',
          '19/01/2018',
          '20/01/2018',
          '21/01/2018',
          '22/01/2018',
          '23/01/2018',
          '24/01/2018',
          '05/02/2018',
          '06/02/2018',
          '07/02/2018',
          '08/02/2018',
          '09/02/2018',
          '10/02/2018',
          '11/02/2018',
          '23/02/2018',
          '24/02/2018',
          '25/02/2018',
          '26/02/2018',
          '27/02/2018',
          '28/02/2018',
          '01/03/2018',
          '19/03/2018',
          '20/03/2018',
          '21/03/2018',
          '22/03/2018',
          '23/03/2018',
          '24/03/2018',
          '13/04/2018',
          '14/04/2018',
          '15/04/2018',
          '16/04/2018',
          '17/04/2018',
          '04/05/2018',
          '05/05/2018',
          '06/05/2018',
          '07/05/2018',
          '08/05/2018',
          '21/05/2018',
          '22/05/2018',
          '23/05/2018',
          '24/05/2018',
          '07/06/2018',
          '08/06/2018',
          '09/06/2018',
          '10/06/2018',
          '11/06/2018',
          '24/06/2018',
          '25/06/2018',
          '26/06/2018',
          '27/06/2018',
          '28/06/2018',
          '29/06/2018',
          '12/07/2018',
          '13/07/2018',
          '14/07/2018',
          '15/07/2018',
          '16/07/2018',
          '03/08/2018',
          '04/08/2018',
          '05/08/2018',
          '06/08/2018',
          '07/08/2018',
          '08/08/2018',
          '21/08/2018',
          '22/08/2018',
          '23/08/2018',
          '24/08/2018',
          '25/08/2018',
          '26/08/2018',
          '15/09/2018',
          '16/09/2018',
          '17/09/2018',
          '18/09/2018',
          '19/09/2018',
          '20/09/2018',
          '26/09/2018',
          '27/09/2018',
          '28/09/2018',
          '29/09/2018',
          '30/09/2018'
        ]
      },
      {
        title: 'Studio in historical center',
        type: 'Private room in apartment',
        generalDesc:
          'The complex used to be the old bakery of Oia and it was recently restored with respect to the unique local architecture creating a remarkable ekistic complex of a unique sculptural quality. The plasticity of the forms,the use of local techniques, the built in beds and the antique furniture together with modern amenities strike the right balance between sophistication and coziness.',
        guestAccess:
          'Me or my husband John we will usually welcome you to the house. I am always available to answer all of your questions via messages or emails and at the house you will find a local mobile that you can use it to call us.',
        others: '',
        price: 250,
        amenities: ['television', 'laptop', 'shower', 'wifi'],
        imageUrl: 'https://walhalla.com/assets/img/jumbotron/v20-p29.jpg',
        owner: {
          imageUrl: 'https://s3.amazonaws.com/uifaces/faces/twitter/samihah/128.jpg',
          name: 'Mona'
        },
        address: {
          country: 'United Kingdom',
          city: 'Israel',
          street: 'Abby Road',
          number: '23',
          lat: 31.0461,
          lng: 34.432
        },
        theSpace: {
          description:
            'This cave house, hanging on the cliffs of the caldera, is part of a traditional synthesis of houses owned by a family of architects',
          guests: 2,
          beds: 2,
          bedrooms: 1
        },
        reviews: [
          {
            id: 1,
            title: 'Very small but clean room',
            name: 'Lea',
            content: 'Consequat nulla nisl nunc nisl duis bibendum venenatis turpis enim blandit mi in',
            userImageUrl: 'https://s3.amazonaws.com/uifaces/faces/twitter/h1brd/128.jpg',
            rating: 3,
            date: 'DECEMBER 19 2017'
          },
          {
            id: 2,
            title: 'Nice couple, good vibes',
            name: 'David',
            content: 'Justo in hac habitasse platea dictumst etiam cursus urna ut tellus ut erat id vulputate',
            userImageUrl: 'https://s3.amazonaws.com/uifaces/faces/twitter/dutchnadia/128.jpg',
            rating: 4,
            date: 'May 25 2017'
          }
        ],
        occupancy: [
          '21/10/2017',
          '22/10/2017',
          '23/10/2017',
          '24/10/2017',
          '31/10/2017',
          '01/11/2017',
          '02/11/2017',
          '03/11/2017',
          '11/11/2017',
          '12/11/2017',
          '13/11/2017',
          '19/11/2017',
          '20/11/2017',
          '21/11/2017',
          '01/12/2017',
          '02/12/2017',
          '03/12/2017',
          '04/12/2017',
          '05/12/2017',
          '13/12/2017',
          '14/12/2017',
          '15/12/2017',
          '31/12/2017',
          '01/01/2018',
          '02/01/2018',
          '03/01/2018',
          '18/01/2018',
          '19/01/2018',
          '20/01/2018',
          '21/01/2018',
          '22/01/2018',
          '23/01/2018',
          '24/01/2018',
          '05/02/2018',
          '06/02/2018',
          '07/02/2018',
          '08/02/2018',
          '09/02/2018',
          '10/02/2018',
          '11/02/2018',
          '23/02/2018',
          '24/02/2018',
          '25/02/2018',
          '26/02/2018',
          '27/02/2018',
          '28/02/2018',
          '01/03/2018',
          '19/03/2018',
          '20/03/2018',
          '21/03/2018',
          '22/03/2018',
          '23/03/2018',
          '24/03/2018',
          '13/04/2018',
          '14/04/2018',
          '15/04/2018',
          '16/04/2018',
          '17/04/2018',
          '04/05/2018',
          '05/05/2018',
          '06/05/2018',
          '07/05/2018',
          '08/05/2018',
          '21/05/2018',
          '22/05/2018',
          '23/05/2018',
          '24/05/2018',
          '07/06/2018',
          '08/06/2018',
          '09/06/2018',
          '10/06/2018',
          '11/06/2018',
          '24/06/2018',
          '25/06/2018',
          '26/06/2018',
          '27/06/2018',
          '28/06/2018',
          '29/06/2018',
          '12/07/2018',
          '13/07/2018',
          '14/07/2018',
          '15/07/2018',
          '16/07/2018',
          '03/08/2018',
          '04/08/2018',
          '05/08/2018',
          '06/08/2018',
          '07/08/2018',
          '08/08/2018',
          '21/08/2018',
          '22/08/2018',
          '23/08/2018',
          '24/08/2018',
          '25/08/2018',
          '26/08/2018',
          '15/09/2018',
          '16/09/2018',
          '17/09/2018',
          '18/09/2018',
          '19/09/2018',
          '20/09/2018',
          '26/09/2018',
          '27/09/2018',
          '28/09/2018',
          '29/09/2018',
          '30/09/2018'
        ]
      },
      {
        title: 'BEST LOCATION Luxury Loft',
        type: 'Private room in apartment',
        generalDesc:
          'The complex used to be the old bakery of Oia and it was recently restored with respect to the unique local architecture creating a remarkable ekistic complex of a unique sculptural quality. The plasticity of the forms,the use of local techniques, the built in beds and the antique furniture together with modern amenities strike the right balance between sophistication and coziness.',
        guestAccess:
          'Me or my husband John we will usually welcome you to the house. I am always available to answer all of your questions via messages or emails and at the house you will find a local mobile that you can use it to call us.',
        others: '',
        price: 250,
        amenities: ['television', 'laptop', 'shower', 'wifi'],
        imageUrl: 'http://www.inrichting-huis.com/wp-content/afbeeldingen/moderne-woonkeuken-in-uitbouw.jpg',
        owner: {
          imageUrl: 'https://s3.amazonaws.com/uifaces/faces/twitter/samihah/128.jpg',
          name: 'Mona'
        },
        address: {
          country: 'United Kingdom',
          city: 'London',
          street: 'Abby Road',
          number: '23',
          lat: 31.5345,
          lng: 34.83213
        },
        theSpace: {
          description:
            'This cave house, hanging on the cliffs of the caldera, is part of a traditional synthesis of houses owned by a family of architects',
          guests: 2,
          beds: 2,
          bedrooms: 1
        },
        reviews: [
          {
            id: 1,
            title: 'Very small but clean room',
            name: 'Lea',
            content: 'Consequat nulla nisl nunc nisl duis bibendum venenatis turpis enim blandit mi in',
            userImageUrl: 'https://s3.amazonaws.com/uifaces/faces/twitter/h1brd/128.jpg',
            rating: 3,
            date: 'DECEMBER 19 2017'
          },
          {
            id: 2,
            title: 'Nice couple, good vibes',
            name: 'David',
            content: 'Justo in hac habitasse platea dictumst etiam cursus urna ut tellus ut erat id vulputate',
            userImageUrl: 'https://s3.amazonaws.com/uifaces/faces/twitter/dutchnadia/128.jpg',
            rating: 4,
            date: 'May 25 2017'
          }
        ],
        occupancy: [
          '21/10/2017',
          '22/10/2017',
          '23/10/2017',
          '24/10/2017',
          '31/10/2017',
          '01/11/2017',
          '02/11/2017',
          '03/11/2017',
          '11/11/2017',
          '12/11/2017',
          '13/11/2017',
          '19/11/2017',
          '20/11/2017',
          '21/11/2017',
          '01/12/2017',
          '02/12/2017',
          '03/12/2017',
          '04/12/2017',
          '05/12/2017',
          '13/12/2017',
          '14/12/2017',
          '15/12/2017',
          '31/12/2017',
          '01/01/2018',
          '02/01/2018',
          '03/01/2018',
          '18/01/2018',
          '19/01/2018',
          '20/01/2018',
          '21/01/2018',
          '22/01/2018',
          '23/01/2018',
          '24/01/2018',
          '05/02/2018',
          '06/02/2018',
          '07/02/2018',
          '08/02/2018',
          '09/02/2018',
          '10/02/2018',
          '11/02/2018',
          '23/02/2018',
          '24/02/2018',
          '25/02/2018',
          '26/02/2018',
          '27/02/2018',
          '28/02/2018',
          '01/03/2018',
          '19/03/2018',
          '20/03/2018',
          '21/03/2018',
          '22/03/2018',
          '23/03/2018',
          '24/03/2018',
          '13/04/2018',
          '14/04/2018',
          '15/04/2018',
          '16/04/2018',
          '17/04/2018',
          '04/05/2018',
          '05/05/2018',
          '06/05/2018',
          '07/05/2018',
          '08/05/2018',
          '21/05/2018',
          '22/05/2018',
          '23/05/2018',
          '24/05/2018',
          '07/06/2018',
          '08/06/2018',
          '09/06/2018',
          '10/06/2018',
          '11/06/2018',
          '24/06/2018',
          '25/06/2018',
          '26/06/2018',
          '27/06/2018',
          '28/06/2018',
          '29/06/2018',
          '12/07/2018',
          '13/07/2018',
          '14/07/2018',
          '15/07/2018',
          '16/07/2018',
          '03/08/2018',
          '04/08/2018',
          '05/08/2018',
          '06/08/2018',
          '07/08/2018',
          '08/08/2018',
          '21/08/2018',
          '22/08/2018',
          '23/08/2018',
          '24/08/2018',
          '25/08/2018',
          '26/08/2018',
          '15/09/2018',
          '16/09/2018',
          '17/09/2018',
          '18/09/2018',
          '19/09/2018',
          '20/09/2018',
          '26/09/2018',
          '27/09/2018',
          '28/09/2018',
          '29/09/2018',
          '30/09/2018'
        ]
      },
      {
        title: 'Prime 3 Storey Cape Town Penthouse',
        type: 'Private room in apartment',
        generalDesc:
          'The complex used to be the old bakery of Oia and it was recently restored with respect to the unique local architecture creating a remarkable ekistic complex of a unique sculptural quality. The plasticity of the forms,the use of local techniques, the built in beds and the antique furniture together with modern amenities strike the right balance between sophistication and coziness.',
        guestAccess:
          'Me or my husband John we will usually welcome you to the house. I am always available to answer all of your questions via messages or emails and at the house you will find a local mobile that you can use it to call us.',
        others: '',
        price: 250,
        amenities: ['television', 'laptop', 'shower', 'wifi'],
        imageUrl: 'https://it.habcdn.com/photos/project/big/libreria-su-misura-in-legno-390005.jpg',
        owner: {
          imageUrl: 'https://s3.amazonaws.com/uifaces/faces/twitter/samihah/128.jpg',
          name: 'Mona'
        },
        address: {
          country: 'United Kingdom',
          city: 'London',
          street: 'Abby Road',
          number: '23',
          lat: 31.0461,
          lng: 34.83213
        },
        theSpace: {
          description:
            'This cave house, hanging on the cliffs of the caldera, is part of a traditional synthesis of houses owned by a family of architects',
          guests: 2,
          beds: 2,
          bedrooms: 1
        },
        reviews: [
          {
            id: 1,
            title: 'Very small but clean room',
            name: 'Lea',
            content: 'Consequat nulla nisl nunc nisl duis bibendum venenatis turpis enim blandit mi in',
            userImageUrl: 'https://s3.amazonaws.com/uifaces/faces/twitter/h1brd/128.jpg',
            rating: 3,
            date: 'DECEMBER 19 2017'
          },
          {
            id: 2,
            title: 'Nice couple, good vibes',
            name: 'David',
            content: 'Justo in hac habitasse platea dictumst etiam cursus urna ut tellus ut erat id vulputate',
            userImageUrl: 'https://s3.amazonaws.com/uifaces/faces/twitter/dutchnadia/128.jpg',
            rating: 4,
            date: 'May 25 2017'
          }
        ],
        occupancy: [
          '21/10/2017',
          '22/10/2017',
          '23/10/2017',
          '24/10/2017',
          '31/10/2017',
          '01/11/2017',
          '02/11/2017',
          '03/11/2017',
          '11/11/2017',
          '12/11/2017',
          '13/11/2017',
          '19/11/2017',
          '20/11/2017',
          '21/11/2017',
          '01/12/2017',
          '02/12/2017',
          '03/12/2017',
          '04/12/2017',
          '05/12/2017'
        ]
      }
    ]);

    console.log('data1  :', data);
    return data
  } catch (e) {
    console.log(e, 'export homes err');
  }
};

module.exports = exportHomes1;
