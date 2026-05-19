function studentReport(students) {
    if (students.length === 0) {
        return {
            best: null,
            worst: null,
            passed: [],
            failed: []
        };
    }

    let bestStudent = students[0];
    let worstStudent = students[0];

    const passed = [];
    const failed = [];

    for (let i = 0; i < students.length; i++) {
        let st = students[i];

        if (st.score > bestStudent.score) {
            bestStudent = st;
        }

        if (st.score < worstStudent.score) {
            worstStudent = st;
        }

        if (st.score >= 5) {
            passed.push(st.name);
        } else {
            failed.push(st.name);
        }
    }

    passed.sort();

    return {
        best: bestStudent.name,
        worst: worstStudent.name,
        passed: passed,
        failed: failed
    };
}


console.log(studentReport([{name:'An',score:8},
    {name:'Binh',score:4},
    {name:'Chi',score:7}]))
console.log(studentReport([{name:'X',score:5}]))
console.log(studentReport([{name:'A',score:0},{name:'B',score:0}]))
console.log(studentReport([{name:'An',score:8},
    {name:'Binh',score:8},
    {name:'Chi',score:8}]))
console.log(studentReport([]))