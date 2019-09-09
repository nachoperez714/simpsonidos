export default class SoundRepository {

    static myInstance = null;

    static getInstance() {
        if (SoundRepository.myInstance == null) {
            SoundRepository.myInstance = new SoundRepository();
        }

        return SoundRepository.myInstance;
    }

    getItems() {
        return this.list;
    }


    addSound(a,n) {
    const sound = {
      audio:a,
      name:n,
    };
    this.list.push(sound);
    }

    list = [
    {
      audio :'senos',
      name: 'Ese nino tiene senos',
      link: 'https://s0.vocaroo.com/media/download_temp/Vocaroo_s0j0j4Wcpnmd.mp3'
    },
    {
      audio: 'barrio_chino',
      name: 'Olvidalo Marge esto es el Barrio Chino',
      link: 'https://s0.vocaroo.com/media/download_temp/Vocaroo_s0GtPsidplfg.mp3'
    },
    {
      audio: 'burros',
      name: 'Burros idiota',
      link: 'https://s0.vocaroo.com/media/download_temp/Vocaroo_s0i4kTrynusn.mp3'
    },
    {
      audio: 'grasa',
      name: 'Esta grasa no se quita',
      link: 'https://s0.vocaroo.com/media/download_temp/Vocaroo_s0PAZMrOg3g2.mp3'
    },
    {
      audio: 'habla_bien_idiota',
      name: 'Habla bien idiota',
      link: 'https://s0.vocaroo.com/media/download_temp/Vocaroo_s0GmiENdm6QB.mp3'
    },
    {
      audio: 'como_vivo',
      name: 'No digan como vivo',
      link: 'https://s0.vocaroo.com/media/download_temp/Vocaroo_s03ZGfgxE6GV.mp3'
    },
    {
      audio: 'cama_grande',
      name: 'Duermo en un auto de carreras',
      link: 'https://s0.vocaroo.com/media/download_temp/Vocaroo_s0WyeUBkkea7.mp3'
    },
    {
      audio: 'premium',
      name: 'Premium',
      link: 'https://s0.vocaroo.com/media/download_temp/Vocaroo_s0JpDGojnLeQ.mp3'
    },
    {
      audio: 'estupido_y_sensual_flanders',
      name: 'Estupido y sensual Flanders',
      link: 'https://s0.vocaroo.com/media/download_temp/Vocaroo_s02kpfi8y0Hd.mp3'
    },
    {
      audio: 'no_se_ve_asi',
      name: 'Porque el mio no se ve asi',
      link: 'https://s0.vocaroo.com/media/download_temp/Vocaroo_s0ywLyVLDMa6.mp3'
    },
    {
      audio: 'dile_a_bart',
      name: 'Dile a bart que venga',
      link: 'https://s0.vocaroo.com/media/download_temp/Vocaroo_s0h77e8X2Q15.mp3'
    },
    {
      audio: 'esa_pelona',
      name: 'Lesbianas',
      link: 'https://s0.vocaroo.com/media/download_temp/Vocaroo_s0TAOA4bIXuy.mp3'
    },
    {
      audio: 'cosme_fulanito',
      name: 'Cosme Fulanito',
      link: 'https://s0.vocaroo.com/media/download_temp/Vocaroo_s0o0xB2PLCol.mp3'
    },
    {
      audio: 'por_su_pollo',
      name: 'Por su pollo',
      link: 'https://s0.vocaroo.com/media/download_temp/Vocaroo_s0iJ0hduxCnr.mp3'
    },
    {
      audio: 'babilonia',
      name: 'Vamos a jamaica',
      link: 'https://s0.vocaroo.com/media/download_temp/Vocaroo_s0KYK5sIlcQC.mp3'
    },
    {
      audio: 'hola_miguel',
      name: 'Hola miguel',
      link: 'https://s0.vocaroo.com/media/download_temp/Vocaroo_s0tGmfU6BrOE.mp3'
    },
    {
      audio: 'no_lloren_por_mi',
      name: 'No lloren por mi',
      link: 'https://s0.vocaroo.com/media/download_temp/Vocaroo_s0Avg8lp4ca2.mp3'
    },
    {
      audio: 'plan_dental',
      name: 'Plan Dental',
      link: 'https://s0.vocaroo.com/media/download_temp/Vocaroo_s03dWCL84oSn.mp3'
    },
    {
      audio: 'oye_oye_despacio_cerebrito',
      name: 'Oye oye despacio cerebrito',
      link: 'https://s0.vocaroo.com/media/download_temp/Vocaroo_s0b9cEjcTm4L.mp3'
    },
    {
      audio: 'floreria',
      name: 'Floreria',
      link: 'https://s0.vocaroo.com/media/download_temp/Vocaroo_s0UHLlYAObKf.mp3'
    },
    {
      audio: 'puerca',
      name: 'La puerca esta en la pocilga',
      link: 'https://s0.vocaroo.com/media/download_temp/Vocaroo_s0JxLAh17p3j.mp3'
    },
    {
      audio: 'homero_thompson',
      name: 'Homero Thompson',
      link: 'https://s0.vocaroo.com/media/download_temp/Vocaroo_s0cuSKj8oQAj.mp3'
    },
    {
      audio: 'trucazo',
      name: 'Que trucazo no',
      link: 'https://s0.vocaroo.com/media/download_temp/Vocaroo_s0wHVS3zi823.mp3'
    },
    {
      audio: 'zap',
      name: 'Zap!',
      link: 'https://s0.vocaroo.com/media/download_temp/Vocaroo_s0ikxF6YesCq.mp3'
    },
    {
      audio: 'el_gato',
      name: 'El gato vendra',
      link: 'https://s0.vocaroo.com/media/download_temp/Vocaroo_s0bAVMS05tYP.mp3'
    },
    {
      audio: 'alf',
      name: 'Alf volvio en forma de fichas',
      link: 'https://s0.vocaroo.com/media/download_temp/Vocaroo_s0pNxkXIiY3Q.mp3'
    },
    {
      audio: 'artie',
      name: 'Artie artie artie',
      link: 'https://s0.vocaroo.com/media/download_temp/Vocaroo_s0oj3f1W0aV7.mp3'
    },
    {
      audio: 'aurora_boreal',
      name: 'Aurora Boreal',
      link: 'https://s0.vocaroo.com/media/download_temp/Vocaroo_s0dKRaIlyii5.mp3'
    },
    {
      audio: 'vas_a_morir_moe',
      name: 'Vas a morir moe',
      link: 'https://s0.vocaroo.com/media/download_temp/Vocaroo_s00T78mEVkcB.mp3'
    },
    {
      audio: 'cuca',
      name: 'A la grande le puse cuca',
      link: 'https://s0.vocaroo.com/media/download_temp/Vocaroo_s0LBP9XdtngJ.mp3'
    },
    {
      audio: 'no_voy_a_mentirte',
      name: 'Marge, no voy a mentirte',
      link: 'https://s0.vocaroo.com/media/download_temp/Vocaroo_s01Bha6dq6H7.mp3'
    },
    {
      audio: 'uh_lala',
      name: 'Uh la la señor frances',
      link: 'https://s0.vocaroo.com/media/download_temp/Vocaroo_s06NzbwCrXkn.mp3'
    },
    {
      audio: 'jalea',
      name: 'Te voy a tocar la jalea',
      link: 'https://s0.vocaroo.com/media/download_temp/Vocaroo_s0naomXQcnfQ.mp3'
    },
    {
      audio: 'diabolico',
      name: 'Usted es diabolico',
      link: 'https://s0.vocaroo.com/media/download_temp/Vocaroo_s013I0aL51GL.mp3'
    },
    {
      audio: 'gripe',
      name: 'Y no es gripe gordito',
      link: 'https://s0.vocaroo.com/media/download_temp/Vocaroo_s0ynpTJQEZis.mp3'
    },
    {
      audio: 'no_bueno_si',
      name: 'Bueno si',
      link: 'https://s0.vocaroo.com/media/download_temp/Vocaroo_s0IP6LPPtInk.mp3'
    },
    {
      audio: 'tron',
      name: 'Alguien vio tron?',
      link: 'https://s0.vocaroo.com/media/download_temp/Vocaroo_s0GhhEy8oQgn.mp3'
    },
    {
      audio: 'malir_sal',
      name: 'Malir sal',
      link: 'https://s0.vocaroo.com/media/download_temp/Vocaroo_s0gVdCqnD9d9.mp3'
    },
    {
      audio: 'ay_caramba',
      name: 'Ay Caramba',
      link: 'https://s0.vocaroo.com/media/download_temp/Vocaroo_s0JqszA4axEG.mp3'
    },
    {
      audio: 'que_acabas_de_ver',
      name: 'Que acabas de ver Lisa',
      link: 'https://s0.vocaroo.com/media/download_temp/Vocaroo_s0ypRBzCedHI.mp3'
    },

  ];
}
