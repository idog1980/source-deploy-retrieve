/*
 * Copyright (c) 2020, salesforce.com, inc.
 * All rights reserved.
 * Licensed under the BSD 3-Clause license.
 * For full license text, see LICENSE.txt file in the repo root or https://opensource.org/licenses/BSD-3-Clause
 */
import { join } from 'path';

export const mockRegistry = {
  types: {
    kathybates: {
      directoryName: 'kathys',
      inFolder: true,
      name: 'KathyBates',
      suffix: 'kathy'
    },
    keanureeves: {
      directoryName: 'keanus',
      inFolder: false,
      name: 'KeanuReeves',
      suffix: 'keanu'
    },
    tinafey: {
      directoryName: 'tinas',
      inFolder: true,
      name: 'TinaFey'
    },
    dwaynejohnson: {
      directoryName: 'dwaynes',
      inFolder: false,
      name: 'DwayneJohnson'
    },
    tarajihenson: {
      directoryName: 'tarajis',
      inFolder: false,
      name: 'TarajiHenson'
    },
    simonpegg: {
      directoryName: 'simons',
      inFolder: false,
      name: 'SimonPegg'
    },
    tinafeyfolder: {
      directoryName: 'tinas',
      inFolder: false,
      name: 'TinaFeyFolder',
      suffix: 'tinafeyFolder'
    },
    genewilder: {
      directoryName: 'genes',
      inFolder: false,
      name: 'GeneWilder',
      suffix: 'gene'
    },
    reginaking: {
      directoryName: 'reginas',
      inFolder: false,
      name: 'ReginaKing',
      suffix: 'regina',
      children: {
        types: {
          x: {
            directoryName: 'xs',
            name: 'X',
            suffix: 'x'
          },
          y: {
            name: 'Y',
            suffix: 'y'
          }
        },
        suffixes: {
          x: 'x',
          y: 'y'
        }
      }
    }
  },
  suffixes: {
    kathy: 'kathybates',
    keanu: 'keanureeves',
    missing: 'typewithoutdef',
    tinafeyFolder: 'tinafeyfolder',
    genewilder: 'gene',
    reginaking: 'regina'
  },
  mixedContent: {
    dwaynes: 'dwaynejohnson',
    tarajis: 'tarajihenson',
    simons: 'simonpegg',
    tinas: 'tinafey',
    reginas: 'reginaking'
  },
  adapters: {
    keanureeves: 'matchingContentFile',
    tinafey: 'mixedContent',
    tarajihenson: 'mixedContent',
    dwaynejohnson: 'mixedContent',
    simonpegg: 'bundle',
    reginaking: 'decomposed'
  },
  apiVersion: '48.0'
};

import * as keanu from './keanuConstants';
import * as kathy from './kathyConstants';
import * as simon from './simonConstants';
import * as taraji from './tarajiConstants';
import * as tina from './tinaConstants';
import * as gene from './geneConstants';
import * as regina from './reginaConstants';
export { kathy, keanu, simon, taraji, tina, gene, regina };

// Mixed content
export const DWAYNE_DIR = join('path', 'to', 'dwaynes');
export const DWAYNE_XML = join(DWAYNE_DIR, 'a.dwayne-meta.xml');
export const DWAYNE_SOURCE = join(DWAYNE_DIR, 'a.xyz');