{
    function f() {
        let A = prompt('Введите число A:'),
            B = prompt('Введите число B:');
        {
            function div(val, by) {
                return (val - val % by) / by;
            }

            if (A % B == 0)
                alert('A является делителем числа B')
            else (B % A == 0)
                alert('B не является делителем числа А')
        }
    }}
