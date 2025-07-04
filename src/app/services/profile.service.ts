import { Injectable } from '@angular/core';
import { Profile } from '../models/profile';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  constructor() { }

  getProfile(): Profile {

    var profile: Profile = {
      email: 'ludamico29@gmail.com',
      name: 'Lucas Oliveira Damico',
      whatsApp: 'https://api.whatsapp.com/send?phone=5511963297959&text=Ol%C3%A1,%20estou%20no%20seu%20site%20e%20gostaria%20de%20mais%20informa%C3%A7%C3%B5es',
      linkedIn: 'https://www.linkedin.com/in/lucas-oliveira-damico-938470366/'
    }

    return profile;

  }

}
