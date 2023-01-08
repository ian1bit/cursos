// forEach e callbacks
const socialNetworks = ['youtube', 'twiter', 'instagram', 'facebook']

const logArrayInfo = (socialNetwork, index, array) => {
  console.log(index, socialNetwork, array)
}

socialNetworks.forEach(logArrayInfo)