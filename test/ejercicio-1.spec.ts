import 'mocha';
import {expect} from 'chai';
import {Imperial_Length} from '../src/ejercicio-1';
import {Metric_Lenght} from '../src/ejercicio-1';
import {Adapter_Length} from '../src/ejercicio-1';

describe('Test que calcula las conversiones', () => {
  let objeto_1: Metric_Lenght = new Metric_Lenght(5);
  let objeto_2: Imperial_Length = new Imperial_Length(2);
  it('Se pasa de distintas unidades', () => {
    expect(objeto_1.get_valor_centimetros()).to.be.equal(5);
    expect(objeto_2.get_valor_pulgadas()).to.be.equals(2);

  });
});
