const c_count = document.getElementById('c_count')
let mcoin_count = 0

function add_mcoin(count) {
    mcoin_count += count;

    document.getElementById('c_count').innerHTML = mcoin_count
     
    console.log(mcoin_count)
}


