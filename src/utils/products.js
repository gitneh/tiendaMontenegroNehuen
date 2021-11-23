const products = [
    {
      id: 30,
      name: "Akenaton y Nefertari",
      stock: 0,
      cost: 140,
      description: "Estatuilla egipcia",
      capacity: 1500,
      image: [
        "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fb/Akhenathon_and_Nefertiti_E15593_mp3h8771-black.jpg/200px-Akhenathon_and_Nefertiti_E15593_mp3h8771-black.jpg"      
        ],
      sales: 0,
      createdAt: "2021-09-18T05:11:04.952Z",
      updatedAt: "2021-09-18T19:39:05.347Z",
      categoryId: 9,
      brandId: 95,
      packingId: null,
      category: {
        name: "Nefertari",
        id: 9
      },
      brand: {
        id: 95,
        name: "Akenaton y Nerfertari"
      },
      reviews: []
    },
    {
      id: 29,
      name: "Nefertari",
      stock: 100,
      cost: 140,
      description: "Estatuilla egipcia",
      capacity: 1500,
      image: [
        "https://arc-anglerfish-eu-central-1-prod-prisa.s3.amazonaws.com/public/7YDUNM3MFT43WN3TF6YY6DJVWM.jpg"
      ],
      sales: 0,
      createdAt: "2021-09-18T05:11:04.952Z",
      updatedAt: "2021-09-18T19:39:05.347Z",
      categoryId: 9,
      brandId: 95,
      packingId: null,
      category: {
        name: "Nefertari",
        id: 9
      },
      brand: {
        id: 95,
        name: "Nefertari"
      },
      reviews: [
        {
          "comment": "Estatuillas de Nefertari",
          "rating": "4"
        }
      ]
    },
    {
      id: 76,
      name: "Horus",
      stock: 92,
      cost: 575,
      description: "Estatuilla de Horus",
      capacity: 750,
      image: [
        "https://static.elcorreo.com/www/pre2017/multimedia/RC/200601/31/Media/egipto--200x200.jpg"
      ],
      sales: 0,
      createdAt: "2021-09-18T05:11:04.952Z",
      updatedAt: "2021-09-20T16:10:21.030Z",
      categoryId: 1,
      brandId: 10,
      packingId: null,
      category: {
        name: "Horus",
        id: 1
      },
      brand: {
        id: 10,
        name: "horus"
      },
      reviews: []
    },
    {
      id: 170,
      name: "Horus pequeño",
      stock: 100,
      cost: 575,
      description: "Estatuilla de Horus",
      capacity: 750,
      image: [
        "https://http2.mlstatic.com/D_NQ_NP_904650-MLA25740098672_072017-V.jpg"
      ],
      sales: 0,
      createdAt: "2021-09-18T05:11:04.952Z",
      updatedAt: "2021-09-20T16:10:21.032Z",
      categoryId: 1,
      brandId: 10,
      packingId: null,
      category: {
        name: "Horus",
        id: 1
      },
      brand: {
        id: 10,
        name: "Horus pequeño"
      },
      reviews: []
    },
    {
      id: 233,
      name: "Horus en yeso",
      stock: 100,
      cost: 765,
      description: "Estatuilla de horus",
      capacity: 750,
      image: [
        "https://http2.mlstatic.com/D_NQ_NP_742002-MLA47338215211_092021-V.jpg"
      ],
      sales: 0,
      createdAt: "2021-09-18T05:11:04.952Z",
      updatedAt: "2021-09-20T16:10:21.031Z",
      categoryId: 1,
      brandId: 10,
      packingId: null,
      category: {
        name: "Horus",
        id: 1
      },
      brand: {
        id: 10,
        name: "horus"
      },
      reviews: []
    },
    {
      id: 139,
      name: "Horus sentado",
      stock: 100,
      cost: 490,
      description: "Estatuilla de horus",
      capacity: 750,
      image: [
        "https://i.etsystatic.com/19180532/r/il/90e56e/2454939404/il_fullxfull.2454939404_3e1g.jpg"
      ],
      sales: 0,
      createdAt: "2021-09-18T05:11:04.952Z",
      updatedAt: "2021-09-20T16:10:21.030Z",
      categoryId: 1,
      brandId: 16,
      packingId: null,
      category: {
        name: "Horus",
        id: 1
      },
      brand: {
        id: 16,
        name: "Horus Sentado"
      },
      reviews: []
    },
    {
      id: 68,
      name: "Horus original",
      stock: 89,
      cost: 490,
      description: "Estatuilla de horus",
      capacity: 750,
      image: [
        "https://http2.mlstatic.com/D_NQ_NP_645380-MLA41288608644_032020-V.jpg"
      ],
      sales: 0,
      createdAt: "2021-09-18T05:11:04.952Z",
      updatedAt: "2021-09-20T16:10:21.032Z",
      categoryId: 1,
      brandId: 16,
      packingId: null,
      category: {
        name: "Horus",
        id: 1
      },
      brand: {
        id: 16,
        name: "horus"
      },
      reviews: []
    },
    {
      id: 31,
      name: "Escarabajos",
      stock: 100,
      cost: 3150,
      description: "Estatuilla de escarabajo",
      capacity: 700,
      image: [
        "https://upload.wikimedia.org/wikipedia/commons/1/1d/Egyptian_-_Commemorative_Scarab_of_Amenhotep_III_-_Walters_42206_-_Top.jpg"
      ],
      sales: 0,
      createdAt: "2021-09-18T05:11:04.952Z",
      updatedAt: "2021-09-18T11:08:17.792Z",
      categoryId: 5,
      brandId: 17,
      packingId: null,
      category: {
        name: "Escarabajos",
        id: 5
      },
      brand: {
        id: 17,
        name: "escarabajos"
      },
      reviews: []
    }
  ];

  module.exports = {
    products,
  }