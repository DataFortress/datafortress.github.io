hljs.registerLanguage("r",function(e){var r="([a-zA-Z]|\\.[a-zA-Z.])[a-zA-Z0-9._]*";return{c:[e.HCM,{b:r,l:r,k:{keyword:"function if in break next repeat else for return switch while try tryCatch stop warning require library attach detach source setMethod setGeneric setGroupGeneric setClass ... print",literal:"NULL NA TRUE FALSE T F Inf NaN NA_integer_|10 NA_real_|10 NA_character_|10 NA_complex_|10"},r:0},{cN:"number",b:"0[xX][0-9a-fA-F]+[Li]?\\b",r:0},{cN:"number",b:"\\d+(?:[eE][+\\-]?\\d*)?L\\b",r:0},{cN:"number",b:"\\d+\\.(?!\\d)(?:i\\b)?",r:0},{cN:"number",b:"\\d+(?:\\.\\d*)?(?:[eE][+\\-]?\\d*)?i?\\b",r:0},{cN:"number",b:"\\.\\d+(?:[eE][+\\-]?\\d*)?i?\\b",r:0},{b:"`",e:"`",r:0},{cN:"string",c:[e.BE],v:[{b:'"',e:'"'},{b:"'",e:"'"}]},{cN:"keyword",b:/(^|\s*)\w+[\.\w+]*(?=:::?|$)/,r:0},{cN:"keyword",b:/(^|\s*)[\.\w\_]+(?=\(|$)/},{cN:"keyword",b:/(^|\s*)(:::?|\$|\.)[\.\w\_]+(?=\(|$)/},{cN:"symbol",v:[{b:"%.{1,2}%",r:0},{b:"\\:{2,3}",r:0},{b:"\\@|\\$|;|,|~|&|\\||\\(|\\)|<-|=|{|}",r:0}]}]}});
