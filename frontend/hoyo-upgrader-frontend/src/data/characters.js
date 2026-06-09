/* eslint-disable no-unused-vars */
/* eslint-disable import/prefer-default-export */

export function getBuildsBySets(characterData) {
  const builds = {};
  characterData.forEach((build) => {
    const { sets } = build;
    sets.forEach((set) => {
      if (!builds[set]) {
        builds[set] = [];
      }
      builds[set].push({
        ...build,
      });
    });
  });

  return builds;
}

export function getEmptyBuild() {
  return {
    artifactWearer: '',
    buildOwner: '',
    sets: [],
    mainstats: {
      sands: [],
      goblet: [],
      circlet: [],
    },
    substats: [],
  };
}

export const characterData = {
  Arlecchino: { name: 'Arlecchino', element: 'Pyro', weapon: 'Polearm' },
  Dehya: { name: 'Dehya', element: 'Pyro', weapon: 'Claymore' },
  Diluc: { name: 'Diluc', element: 'Pyro', weapon: 'Claymore' },
  Durin: { name: 'Durin', element: 'Pyro', weapon: 'Bow' },
  HuTao: { name: 'Hu Tao', element: 'Pyro', weapon: 'Polearm' },
  Klee: { name: 'Klee', element: 'Pyro', weapon: 'Catalyst' },
  Lyney: { name: 'Lyney', element: 'Pyro', weapon: 'Bow' },
  Mavuika: { name: 'Mavuika', element: 'Pyro', weapon: 'Claymore' },
  Nicole: { name: 'Nicole', element: 'Cryo', weapon: 'Unknown' },
  Yoimiya: { name: 'Yoimiya', element: 'Pyro', weapon: 'Bow' },

  Amber: { name: 'Amber', element: 'Pyro', weapon: 'Bow' },
  Bennett: { name: 'Bennett', element: 'Pyro', weapon: 'Sword' },
  Chevreuse: { name: 'Chevreuse', element: 'Pyro', weapon: 'Polearm' },
  Gaming: { name: 'Gaming', element: 'Pyro', weapon: 'Claymore' },
  Thoma: { name: 'Thoma', element: 'Pyro', weapon: 'Polearm' },
  Xiangling: { name: 'Xiangling', element: 'Pyro', weapon: 'Polearm' },
  Xinyan: { name: 'Xinyan', element: 'Pyro', weapon: 'Claymore' },
  Yanfei: { name: 'Yanfei', element: 'Pyro', weapon: 'Catalyst' },

  Citlali: { name: 'Citlali', element: 'Cryo', weapon: 'Catalyst' },
  Eula: { name: 'Eula', element: 'Cryo', weapon: 'Claymore' },
  Escoffier: { name: 'Escoffier', element: 'Cryo', weapon: 'Polearm' },
  Ganyu: { name: 'Ganyu', element: 'Cryo', weapon: 'Bow' },
  KamisatoAyaka: { name: 'Ayaka', element: 'Cryo', weapon: 'Sword' },
  Qiqi: { name: 'Qiqi', element: 'Cryo', weapon: 'Sword' },
  Sandrone: { name: 'Sandrone', element: 'Cryo', weapon: 'Claymore' },
  Shenhe: { name: 'Shenhe', element: 'Cryo', weapon: 'Polearm' },
  Skirk: { name: 'Skirk', element: 'Cryo', weapon: 'Sword' },
  Wriothesley: { name: 'Wriothesley', element: 'Cryo', weapon: 'Catalyst' },
  Aloy: { name: 'Aloy', element: 'Cryo', weapon: 'Bow' },

  Charlotte: { name: 'Charlotte', element: 'Cryo', weapon: 'Catalyst' },
  Chongyun: { name: 'Chongyun', element: 'Cryo', weapon: 'Claymore' },
  Diona: { name: 'Diona', element: 'Cryo', weapon: 'Bow' },
  Freminet: { name: 'Freminet', element: 'Cryo', weapon: 'Claymore' },
  Kaeya: { name: 'Kaeya', element: 'Cryo', weapon: 'Sword' },
  Layla: { name: 'Layla', element: 'Cryo', weapon: 'Sword' },
  Mika: { name: 'Mika', element: 'Cryo', weapon: 'Polearm' },
  Rosaria: { name: 'Rosaria', element: 'Cryo', weapon: 'Polearm' },

  Columbina: { name: 'Columbina', element: 'Hydro', weapon: 'Catalyst' },
  Furina: { name: 'Furina', element: 'Hydro', weapon: 'Sword' },
  KamisatoAyato: { name: 'Ayato', element: 'Hydro', weapon: 'Sword' },
  Mona: { name: 'Mona', element: 'Hydro', weapon: 'Catalyst' },
  Mualani: { name: 'Mualani', element: 'Hydro', weapon: 'Catalyst' },
  Nilou: { name: 'Nilou', element: 'Hydro', weapon: 'Sword' },
  Sigewinne: { name: 'Sigewinne', element: 'Hydro', weapon: 'Bow' },
  Tartaglia: { name: 'Tartaglia', element: 'Hydro', weapon: 'Bow' },
  Yelan: { name: 'Yelan', element: 'Hydro', weapon: 'Bow' },
  Neuvillette: { name: 'Neuvillette', element: 'Hydro', weapon: 'Catalyst' },
  SangonomiyaKokomi: { name: 'Kokomi', element: 'Hydro', weapon: 'Catalyst' },

  Aino: { name: 'Aino', element: 'Hydro', weapon: 'Claymore' },
  Barbara: { name: 'Barbara', element: 'Hydro', weapon: 'Catalyst' },
  Candace: { name: 'Candace', element: 'Hydro', weapon: 'Polearm' },
  Dahlia: { name: 'Dahlia', element: 'Hydro', weapon: 'Sword' },
  Xingqiu: { name: 'Xingqiu', element: 'Hydro', weapon: 'Sword' },

  Clorinde: { name: 'Clorinde', element: 'Electro', weapon: 'Sword' },
  Cyno: { name: 'Cyno', element: 'Electro', weapon: 'Polearm' },
  Flins: { name: 'Flins', element: 'Electro', weapon: 'Catalyst' },
  Ineffa: { name: 'Ineffa', element: 'Electro', weapon: 'Polearm' },
  Keqing: { name: 'Keqing', element: 'Electro', weapon: 'Sword' },
  RaidenShogun: { name: 'Raiden Shogun', element: 'Electro', weapon: 'Polearm' },
  Varesa: { name: 'Varesa', element: 'Electro', weapon: 'Catalyst' },
  YaeMiko: { name: 'Yae Miko', element: 'Electro', weapon: 'Catalyst' },

  Beidou: { name: 'Beidou', element: 'Electro', weapon: 'Claymore' },
  Dori: { name: 'Dori', element: 'Electro', weapon: 'Claymore' },
  Fischl: { name: 'Fischl', element: 'Electro', weapon: 'Bow' },
  Iansan: { name: 'Iansan', element: 'Electro', weapon: 'Polearm' },
  KujouSara: { name: 'Kujou Sara', element: 'Electro', weapon: 'Bow' },
  KukiShinobu: { name: 'Kuki Shinobu', element: 'Electro', weapon: 'Sword' },
  Lisa: { name: 'Lisa', element: 'Electro', weapon: 'Catalyst' },
  Ororon: { name: 'Ororon', element: 'Electro', weapon: 'Bow' },
  Razor: { name: 'Razor', element: 'Electro', weapon: 'Claymore' },
  Sethos: { name: 'Sethos', element: 'Electro', weapon: 'Bow' },

  Chasca: { name: 'Chasca', element: 'Anemo', weapon: 'Bow' },
  Jean: { name: 'Jean', element: 'Anemo', weapon: 'Sword' },
  KaedeharaKazuha: { name: 'Kazuha', element: 'Anemo', weapon: 'Sword' },
  Varka: { name: 'Varka', element: 'Anemo', weapon: 'Claymore' },
  Venti: { name: 'Venti', element: 'Anemo', weapon: 'Bow' },
  Wanderer: { name: 'Wanderer', element: 'Anemo', weapon: 'Catalyst' },
  Xianyun: { name: 'Xianyun', element: 'Anemo', weapon: 'Catalyst' },
  Xiao: { name: 'Xiao', element: 'Anemo', weapon: 'Polearm' },

  Faruzan: { name: 'Faruzan', element: 'Anemo', weapon: 'Bow' },
  Ifa: { name: 'Ifa', element: 'Anemo', weapon: 'Catalyst' },
  Jahoda: { name: 'Jahoda', element: 'Pyro', weapon: 'Unknown' },
  LanYan: { name: 'LanYan', element: 'Anemo', weapon: 'Catalyst' },
  Lynette: { name: 'Lynette', element: 'Anemo', weapon: 'Sword' },
  Sayu: { name: 'Sayu', element: 'Anemo', weapon: 'Claymore' },
  ShikanoinHeizou: { name: 'Heizou', element: 'Anemo', weapon: 'Catalyst' },
  Sucrose: { name: 'Sucrose', element: 'Anemo', weapon: 'Catalyst' },

  Albedo: { name: 'Albedo', element: 'Geo', weapon: 'Sword' },
  AratakiItto: { name: 'Itto', element: 'Geo', weapon: 'Claymore' },
  Linnea: { name: 'Linnea', element: 'Geo', weapon: 'Bow' },
  Navia: { name: 'Navia', element: 'Geo', weapon: 'Claymore' },
  Xilonen: { name: 'Xilonen', element: 'Geo', weapon: 'Sword' },
  Zhongli: { name: 'Zhongli', element: 'Geo', weapon: 'Polearm' },
  Zibai: { name: 'Zibai', element: 'Geo', weapon: 'Sword' },

  Chiori: { name: 'Chiori', element: 'Geo', weapon: 'Sword' },
  Gorou: { name: 'Gorou', element: 'Geo', weapon: 'Bow' },
  Illuga: { name: 'Illuga', element: 'Geo', weapon: 'Polearm' },
  Kachina: { name: 'Kachina', element: 'Geo', weapon: 'Polearm' },
  Ningguang: { name: 'Ningguang', element: 'Geo', weapon: 'Catalyst' },
  Noelle: { name: 'Noelle', element: 'Geo', weapon: 'Claymore' },
  YunJin: { name: 'Yun Jin', element: 'Geo', weapon: 'Polearm' },

  Alhaitham: { name: 'Alhaitham', element: 'Dendro', weapon: 'Sword' },
  Baizhu: { name: 'Baizhu', element: 'Dendro', weapon: 'Catalyst' },
  Kinich: { name: 'Kinich', element: 'Dendro', weapon: 'Claymore' },
  Lauma: { name: 'Lauma', element: 'Dendro', weapon: 'Catalyst' },
  Nahida: { name: 'Nahida', element: 'Dendro', weapon: 'Catalyst' },
  Nefer: { name: 'Nefer', element: 'Dendro', weapon: 'Unknown' },
  Tighnari: { name: 'Tighnari', element: 'Dendro', weapon: 'Bow' },

  Collei: { name: 'Collei', element: 'Dendro', weapon: 'Bow' },
  Kaveh: { name: 'Kaveh', element: 'Dendro', weapon: 'Claymore' },
  Kirara: { name: 'Kirara', element: 'Dendro', weapon: 'Sword' },
  Yaoyao: { name: 'Yaoyao', element: 'Dendro', weapon: 'Polearm' },

  Traveler: { name: 'Traveler', element: ' ', weapon: 'Sword' },
};
