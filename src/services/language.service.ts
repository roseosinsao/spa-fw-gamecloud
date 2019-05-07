import { Injectable } from '@angular/core';
import { Language } from 'src/shared/models/languages.model';

@Injectable()
export class LanguageService {
    languages: Array<Language>;
}