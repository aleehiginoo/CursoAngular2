import { PipeTransform, Pipe } from '@angular/core'


@Pipe({
    name: 'descricaoReduzida'
})
export class DescricaoReduzida implements PipeTransform{

    transform(texto: string, truncarEm: number, iniciarEm: number): string{
        return texto.length > truncarEm
            ? texto.substr(iniciarEm, truncarEm) + '....'
            : texto
    }
}