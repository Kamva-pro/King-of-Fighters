const GameViewPort = {
    HEIGHT: 224,
    WIDTH: 384 ,
    SCALE: 4
}

window.onload = () => {
    console.log("Console is ready")
    const canvas = document.querySelector("canvas")
    const context = canvas.getContext('2d')

    canvas.width = GameViewPort.WIDTH
    canvas.height = GameViewPort.HEIGHT

    context.strokeStyle = "yellow"

    //stroke starting point
    context.moveTo(0,0)
    context.lineTo(GameViewPort.WIDTH, GameViewPort.HEIGHT)
    context.stroke()
    

    context.moveTo(GameViewPort.WIDTH, 0)
    context.lineTo(0, GameViewPort.HEIGHT)
    context.stroke()
}
