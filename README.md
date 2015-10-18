# lol-hash-util
A bunch of functions used to create unsigned 32 bit integer hashes for League of Legends.

## Download
lol-hash-util is installable via:

- [GitHub](https://github.com/Pupix/lol-hash-util) `git clone https://github.com/Pupix/lol-hash-util.git`
- [npm](https://www.npmjs.com/): `npm install lol-hash-util`

## Methods

### boneHash(name)

Creates a hash used in .skl/.anm files to identify bone names. (e.g. boneHash('root'))

### gameHash(name)

Creates a hash used to identify skills in game packets. (e.g. gameHash('EzrealMysticShot'))

### inibinHash(category, name)

Creates a hash used for .inibin/.troybin files. (e.g. inibinHash('Data', 'BaseHP'))
