const team = []

const yeniTakim = localStorage.getItem('team')

if (typeof yeniTakim === 'undefined' || yeniTakim === null) {
  console.log('yok')
  localStorage.setItem('team', team)
}

function takimEkle () {
  var takimIsmi = document.getElementById('takimAdi').value

  if (
    !(
      takimIsmi == '' ||
      takimIsmi == ' ' ||
      takimIsmi == '  ' ||
      takimIsmi == '   '
    )
  ) {
    var eskiTakim = localStorage.getItem('team')
    console.log(eskiTakim)
    eskiTakim = eskiTakim.split(',')
    eskiTakim.push(takimIsmi)
    localStorage.setItem('team', eskiTakim)
  }
  location.reload()
}

var xx = yeniTakim.split(',')

var teams = []
for (let i = 0; i < xx.length; i++) {
  var z = { id: xx[i], matches: [] }
  teams.push(z)
}

console.log(teams)

function fixture (ts) {
  var mc = ts.length - 1, // match count is one less than the total number of teams.
    sp = 0, // calculated start position to insert matches in the matches array.
    tm = 0 // competing team's calculated index at the input (ts) array.
  return ts.map(
    (t, i, a) => (
      a.slice(i + 1).forEach(function (_, j, b) {
        sp = (2 * i + j) % mc
        tm = ((j + mc - i - 1) % (mc - i)) + i + 1
        t.matches[sp] = a[tm].id
        a[tm].matches[sp] = t.id
      }),
      t
    )
  )
}

result = fixture(teams)

function fiksturOlustur () {
  if (result.length % 2 == 0) {
    document.getElementById('takimFikstür').appendChild(takimFikstür(teams))
  } else {
    alert('tek haneli takım olmaz')
  }
}

function takimFikstür (array) {
  var list = document.createElement('ul')

  for (var i = 0; i < array.length; i++) {
    var item = document.createElement('li')
    item.appendChild(
      document.createTextNode(array[i].id + '   ---->    ' + array[i].matches)
    )
    list.appendChild(item)
  }

  return list
}

document.getElementById('takimListesi').appendChild(takimListesi(teams))
function takimListesi (array) {
  var list = document.createElement('ul')

  console.log('asdasd', array)
  for (var i = 0; i < array.length; i++) {
    var item = document.createElement('li')
    item.appendChild(document.createTextNode(array[i].id, `<a>dsadas</a>`))

    var itemA = document.createElement('a')
    itemA.innerHTML = `<button type="submit" class="form-control btn btn-danger mb-4"  onclick="takimSil('${array[i].id}')" > Takımı Sil </button>`

    list.appendChild(item)
    list.appendChild(itemA)
  }

  return list
}

function takimSil (id) {
  var eskiTakim = localStorage.getItem('team')
  eskiTakim = eskiTakim.split(',')

  for (var i = 0; i < eskiTakim.length; i++) {
    if (eskiTakim[i] == id) {
      //çıkarılacak değer 5
      eskiTakim.splice(i, 1)
    }
  }

  localStorage.setItem('team', eskiTakim)
  location.reload() 
}
