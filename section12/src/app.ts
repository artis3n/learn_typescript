import _ from 'lodash';
// class-transformer
import "reflect-metadata";
import {plainToClass} from "class-transformer";
// class-validator
import {validate} from 'class-validator';

import {Product} from './product.model';

declare var GLOBAL: any;
console.log(_.shuffle(['a','c','b']));
console.log(GLOBAL);

const products = [{ title: 'A Carpet', price: 29.99 }, { title: "a book", price: 10.99 }];
const loadedProducts = plainToClass(Product, products);
console.log(loadedProducts.forEach(product => console.log(product.getInformation())));

const newProd = new Product('', -5.99);
validate(newProd)
    .then(errors => {
        if (errors.length > 0) {
            console.log('VALIDATION ERRORS');
            console.log(errors);
        } else {
            console.log(newProd.getInformation());
        }
    });
