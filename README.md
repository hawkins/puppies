# Puppies

Puppies is a microservice for fetching puppy pictures for you to use as placeholder images in your app.

## Rationale

I really like dogs. Dogs are great. And puppies are adorable. So when I was working on a large website for a client, I would wind up using random pictures of dogs from Google Images as placeholders. I always liked this more than static placeholder boxes since we could approximate color, so I made a simple microservice to further simplify this process.

## Endpoints

`/`

Returns a JSON array of images, i.e.

```
[{"type":"image/jpeg","width":480,"height":360,"size":19463,"url":"https://i.ytimg.com/vi/mRf3-JkwqfU/hqdefault.jpg","thumbnail":{"url":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQihVZOhZZ73-ePag8fgdTAV-8Gf-9xchf2e8BrgfBCGySVDfxe_rkFkyZX","width":129,"height":97},"description":"Funny Puppies And Cute Puppy Videos Compilation 2016 [BEST OF ...","parentPage":"https://www.youtube.com/watch?v=mRf3-JkwqfU"}, ...]
```

## Example Usage

[See the Codesandbox for usage](https://codesandbox.io/s/k1k0j3w433)

