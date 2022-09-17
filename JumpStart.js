function JumpStart (n) {
    const answer = []
    
    for (let i = 1; i <= n; i++) {
        if (i % 3 == 0 && i % 5 == 0)
            answer.push("JumpStart")
        else if (i % 3 == 0)
            answer.push("Jump")
        else if (i % 5 == 0)
            answer.push("Start")
        else
            answer.push(i.toString())
    }
    
    return answer
};
console.log(JumpStart(15))