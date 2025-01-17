import {
    bootstrapCameraKit,
    createMediaStreamSource,
    Transform2D,
} from '@snap/camera-kit'

(async function () {

    // var cameraKit = await bootstrapCameraKit({ apiToken: 'eyJhbGciOiJIUzI1NiIsImtpZCI6IkNhbnZhc1MyU0hNQUNQcm9kIiwidHlwIjoiSldUIn0.eyJhdWQiOiJjYW52YXMtY2FudmFzYXBpIiwiaXNzIjoiY2FudmFzLXMyc3Rva2VuIiwibmJmIjoxNjk3MDExNzE0LCJzdWIiOiI2MjZiMGU1OC1hM2E2LTQ5ZDgtODQzYS0zYjBkNDk2YmQwNWJ-U1RBR0lOR342ZDFkMWQwNy05YTEzLTQ5N2EtOWE3NS00ODk4ZjgzMzRhN2IifQ.nPVzJXx_O65xLPd2GwmmbsZD8YHvRIgPsHjMtbmfZNs' })
    var cameraKit = await bootstrapCameraKit({ apiToken: 'eyJhbGciOiJIUzI1NiIsImtpZCI6IkNhbnZhc1MyU0hNQUNQcm9kIiwidHlwIjoiSldUIn0.eyJhdWQiOiJjYW52YXMtY2FudmFzYXBpIiwiaXNzIjoiY2FudmFzLXMyc3Rva2VuIiwibmJmIjoxNjk4MDU3NzAyLCJzdWIiOiI0MDUyY2RlNC02YzMzLTRkM2UtYTJjNC0yNzllYzc1M2VmOWR-U1RBR0lOR341MTY4YzVmNC1kYWVkLTQ1N2ItOGJmYy01Y2JhODkwOWU4OTgifQ.b0Z-TegYa2Sg-lZy_8XoPw7f_iz7eEC5BtzYooyL5K4' })

    const session = await cameraKit.createSession();

    document.getElementById('canvas').replaceWith(session.output.live);

    // const { lenses } = await cameraKit.lensRepository.loadLensGroups(['1c840cc0-bead-4a6d-8328-1fbe4a5ba67a']);
    // const { lenses } = await cameraKit.lensRepository.loadLensGroups(['bf816633-dd8b-45e8-9603-4a9859acdd52']);
    // session.applyLens(lenses[3]); 
    // session.applyLens(lenses[0]); 

    //v2 go to https://my-lenses.snapchat.com -> lens scheduler to define group and lens to apply
    const lens = await cameraKit.lensRepository.loadLens(
        'f2510933-b9c3-49da-aeda-4c57fe0edd7e', //lens
        'f7f4e367-f4b3-4de5-8e81-e9c842f2bf0b'  //group 
      );
    await session.applyLens(lens)



    
    // let mediaStream = await navigator.mediaDevices(getUserMedia({ video: true }));
    let mediaStream = await navigator.mediaDevices.getUserMedia({ video: {
        facingMode: 'environment'
    } });

    const source = createMediaStreamSource(mediaStream, {
        // transform: Transform2D.MirrorX,
        cameraType: 'back'
    });



    await session.setSource(source)

    session.setSource(source)

    session.source.setRenderSize(window.innerWidth, window.innerHeight)

    session.play();



})()