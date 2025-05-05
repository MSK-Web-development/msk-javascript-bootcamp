import LinkedList from './data-structures/linked-list'

const braceDetector = function (input) {

    input = input.split('');

    let list = new LinkedList();

    for (let i = 0; i < input.length; i++) {
        const e = input[i];

        if (e === '[' || e === '{' || e === '(') {
            list.add(e);
            continue;
        }
        if (e === '}') {
            list.removeElementFirstOccurance('{');
        }
        if (e === ']') {
            list.removeElementFirstOccurance('[');
        }
        if (e === ')') {
            list.removeElementFirstOccurance('(');
        }


    }


    console.log(!list.length);

}

/* Test

// Balanced inputs
const input1 = '{{}}';
const input2 = '{{(})}';

// NOt balanced inputs
const input3 = '{{)';
const input4 = '{{45[[])}';


braceDetector(input4)

*/


export default braceDetector;



