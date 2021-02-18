import CharactersTypes from './characters.types';
import { 
        addCharacter, 
        addDefaultCharacter, 
        removeCharacter, 
        setPreviousCharacter, 
        addCurrentCharacter, 
        replaceCharacter, 
        updateCharacter 
    } from './characters.utils';

const INITIAL_STATE = {
    defaultCharacter: {
        clothes: {
            data: "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",
            name: "clothes_0",
            position: 1
        },
        
        hands: {
            data: "iVBORw0KGgoAAAANSUhEUgAAAfQAAAKDCAMAAADbxwhcAAAABGdBTUEAALGPC/xhBQAAAwBQTFRFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAszD0iAAAAQB0Uk5T////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////AFP3ByUAAAAJcEhZcwAAFiQAABYkAZsVxhQAAAAYdEVYdFNvZnR3YXJlAHBhaW50Lm5ldCA0LjEuMWMqnEsAAAgDSURBVHhe7dHRTmNJFgXR/v+frkHyFhY9VGFDgZ0daz2em1KevPHPL3JEDxI9SPQg0YNEDxI9SPQg0YNEDxI9SPQg0YNEDxI9SPQg0YNEDxI9SPQg0YNEDxI9SPQg0YNEDxI9SPQg0YNEDxI9SPQg0YNEDxI9SPQg0YNEDxI9SPQg0YNEDxI9SPQg0YNEDxI9SPQg0YNEDxI9SPQg0YNEDxI9SPQg0YNEDxI9SPQg0YNEDxI9SPQg0YNEDxI9SPQg0YNEDxI9SPQg0YNEDxI9SPQg0YNEDxI9SPQg0YNEDxI9SPQg0YNEDxI9SPQg0YNEDxI9SPQg0YNEDxI9SPQg0YNEDxI9SPQg0YNEDxI9SPQg0YNEDxI9SPQg0YNEDxI9SPQg0YNEDxI9SPQg0YNEDxI9SPQg0YNEDxI9SPQg0YNEDxI9SPQg0YNEDxI9SPQg0YNEDxI9SPQg0YNEDxI9SPQg0YNEDxI9SPQg0YNEDxI9SPQg0YNEDxI9SPQg0YNEDxI9SPQg0YNEDxI9SPQg0YNEDxI9SPQg0YNEDxI9SPQg0YNEDxI9SPQg0YNEDxI9SPQg0YNEDxI9SPQg0YNEDxI9SPQg0YNEDxI9SPQg0YNEDxI9SPQg0YNEDxI9SPQg0YNEDxI9SPQg0YNEDxI9SPQg0YNEDxI9SPQg0YNEDxI9SPQg0YNEDxI9SPQg0YNEDxI9SPQg0YNEDxI9SPQg0YNEDxI9SPQg0YNEDxI9SPQg0YNEDxI9SPQg0YNEDxI9SPQg0YNEDxI9SPQg0YNEDxI9SPQg0YNEDxI9SPQg0YNEDxI9SPQg0YNEDxI9SPQg0YNEDxI9SPQg0YNEDxI9SPQg0YNEDxI9SPQg0YNEDxI9SPSgg6P/82qDb7JLXmxwPNE/tEtebHA80T+0S15scLxTH7IMF5t9k13yYoPjif6hXfJig+OJ/qFd8mKD44n+oV3yYoPjHfmQNbjY7PvsnovNzib6h3bPxWZnE/1Du+dis7Md94r9/KvNv9WuerHB2US/xa56scHZRL/FrnqxwdnOesX+/NXm3223XWx2MNFvsdsuNjuY6LfYbRebHUz0W+y2i80OdtAT9s9fbfwTduPFZgcT/Ra78WKzg4l+i914sdnBTo2+2c/ZvbPhoUS/0e6dDQ8l+o1272x4qBPW34++2vxH7eqrzU8k+o129dXmJxL9Rrv6avMTiX6jXX21+YlEv8Ouv9jsRKLfYddfbHYi0e+w6y82O9FT777f+8Y+Pcq2uNjsOKLfZ1tcbHYc0e+zLS42O87zLr4f+8Y+PdAWudjsOKLfZ4tcbHYc0e+zRS42O47o99kiF5sd5wkX3x/9P/v8cFtnNjyK6HfbOrPhUUS/29aZDY/yVEvvP/7bvj6LbXW1+TlEv9u2utr8HKLfbVtdbX6O59h4f+89O/FkttyrjQ8h+qdsuVcbH0L0T9lyrzY+hOifsuVebXyIB6+7f/aenXhaW/Nq8wOI/llb82rzA4j+WVvzavMDPGzV/al37MABtvBseADRv2ALz4YHEP0LtvBseIAfXnX/5zd26Bhb+419emqif8HWfmOfnproX7C139inpyb6F2ztN/bpqX3vkvsRH9rxE+0Fb+zT0xL9i/aCN/bpaYn+RXvBG/v0tB4cfefOtre8ZyeejOhft7e8ZyeejOhft7e8ZyeezEOi7+t/yB72Zzv7eKL/FXvYn+3s44n+V+xhf7azjyf6X7GH/dnOPt5/MMADre6HdvxRRP+b1vRDO/4oov9Na/qhHX8U0b/H6v7GDj2K6N9jdX9jhx5F9O+xur+xQ48i+g9Y6qvNH0X0H7DUV5s/iug/YKmvNn8U0X/AUl9t/iiiB4keJHqQ6EGiB4keJHqQ6EGiB4keJHqQ6EGiB4keJHqQ6EGiB4keJHqQ6EGiB4keJHqQ6EGiB4keJHqQ6EGiB4keJHqQ6EGiB4keJHqQ6EGiB4keJHqQ6EGiB4keJHqQ6EGiB4keJHqQ6EGiB4keJHqQ6EGiB4keJHqQ6EGiB4keJHqQ6EGiB4keJHqQ6EGiB4keJHqQ6EGiB4keJHqQ6EGiB4keJHqQ6EGiB4keJHqQ6EGiB4keJHqQ6EGiB4keJHqQ6EGiB4keJHqQ6EGiB4keJHqQ6EGiB4keJHqQ6EGiB4keJHqQ6EGiB4keJHqQ6EGiB4keJHqQ6EGiB4keJHqQ6EGiB4keJHqQ6EGiB4keJHqQ6EGiB4keJHqQ6EGiB4keJHqQ6EGiB4keJHqQ6EGiB4keJHqQ6EGiB4keJHqQ6EGiB4keJHqQ6EGiB4keJHqQ6EGiB4keJHqQ6EGiB4keJHqQ6EGiB4keJHqQ6EGiB4keJHqQ6EGiB4keJHqQ6EGiB4keJHqQ6EGiB4keJHqQ6EGiB4keJHqQ6EGiB4keJHqQ6EGiB4keJHqQ6EGiB4keJHqQ6EGiB4keJHqQ6EGiB4keJHqQ6EGiB4keJHqQ6EGiB4keJHqQ6EGiB4keJHqQ6EGiB4keJHqQ6EGiB4keJHqQ6EGiB4keJHqQ6EGiB4keJHqQ6EGiB4keJHqQ6EGiB4keJHqQ6EGiB4keJHqQ6EGiB4keJHqQ6EGiB4keJHqQ6EGiB4keJHqQ6EGiB4keJHqQ6EGiB4keJHqQ6EGiB4keJHqQ6EGiB4keJHqQ6EGiB4keJHqQ6EGiB4keJHqQ6EGiB4keJHqQ6EGiB4keJHqQ6EGiB4me8+vX/wAQLV+1Jj+KMAAAAABJRU5ErkJggg==",
            name: "hands_1",
            position: 1
        },
        head: {
            data: "iVBORw0KGgoAAAANSUhEUgAAAfQAAAKDCAMAAADbxwhcAAAABGdBTUEAALGPC/xhBQAAAwBQTFRFAAAA////AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAZ3bsYwAAAQB0Uk5T////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////AFP3ByUAAAAJcEhZcwAAFiQAABYkAZsVxhQAAAAYdEVYdFNvZnR3YXJlAHBhaW50Lm5ldCA0LjEuMWMqnEsAAAjpSURBVHhe7dFLjmNHEMVQe/+LboeRhBoSlOhP1URBnvHLG3jgPz+iU3ShogsVXajoQkUXKrpQ0YWKLlR0oaILFV2o6EJFFyq6UNGFii5UdKGiCxVdqOhCRRcqulDRhYouVHShogsVXajoQkUXKrpQ0YWKLlR0oaILFV2o6EJFFyq6UNGFii5UdKGiCxVdqOhCRRcqulDRhYouVHShogsVXajoQkUXKrpQ0YWKLlR0oaILFV2o6EJFFyq6UNGFii5UdKGiCxVdqOhCRRcqulDRhYouVHShogsVXajoQkUXKrpQ0YWKLlR0oaILFV2o6EJFFyq6UNGFii5UdKGiCxVdqOhCRRcqulDRhYouVHShogsVXajoQkUXKrpQ0YWKLlR0oaILFV2o6EJFFyq6UNGFii5UdKGiCxVdqOhCRRcqulDRhYouVHShogsVXajoQkUXKrpQ0YWKLlR0oaILFV2o6EJFFyq6UNGFii5UdKGiC62O/s+v8J1N0YWKLlR0oZ3/TdPfxSuNog9eaRR98Epj4Q9T8s/w1qHoB28din7w1mHZ35Lwp3/v+OKBCYGiPzAhUPQHJgSK/sCEwKZfJd5B2V/ic7C0XNGfsLRc0Z+wtNya36TaQdDfxauDvc2KPnh1sLdZ0QevDvY2W/GP5AIl/wxvD2bXKvrB24PZtYp+8PZgdq2iH7w9mF3r83+QUAcJ/woTYH2loj8wAdZXKvoDE2B9pU3RifcVLA3WVyr6E5YG6ysV/QlLg/WVPvznKHQQ7itYOrixT9GfsHRwY5+iP2Hp4MY+RX/C0sGNfdZEp9rXsTe4sU/RX7E3uLFP0V+xN7ixzwf/GWlAsq9j7+DUMkV/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",
            name: "head_1",
            position: 1
        },
        legs: {
            data: "iVBORw0KGgoAAAANSUhEUgAAAfQAAAKDCAMAAADbxwhcAAAABGdBTUEAALGPC/xhBQAAAwBQTFRFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAszD0iAAAAQB0Uk5T////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////AFP3ByUAAAAJcEhZcwAAFiQAABYkAZsVxhQAAAAYdEVYdFNvZnR3YXJlAHBhaW50Lm5ldCA0LjEuMWMqnEsAAAaeSURBVHhe7dIxagNAEARB/f/TsgzDhsYok7oqHNjk+h5PckQPEj1I9CDRg0QPEj1I9CDRg0QPEj1I9CDRg0QPEj1I9CDRg0QPEj1I9CDRg0QPEj1I9CDRg0QPEj1I9CDRg0QPEj1I9CDRg0QPEj1I9CDRg0QPEj1I9CDRg0QPEj1I9CDRg0QPEj1I9CDRg0QPEj1I9CDRg0QPEj1I9CDRg0QPEj1I9CDRg0QPEj1I9CDRg0QPEj1I9CDRg0QPEj1I9CDRg0QPEj1I9CDRg0QPEj1I9CDRg0QPEj1I9CDRg0QPEj1I9CDRg0QPEj1I9CDRg0QPEj1I9CDRg0QPEj1I9CDRg0QPEj1I9CDRg0QPEj1I9CDRg0QPEj1I9CDRg0QPEj1I9CDRg0QPEj1I9CDRg0QPEj1I9CDRg0QPEj1I9CDRg0QPEj1I9CDRg0QPEj1I9CDRg0QPEj1I9CDRg0QPEj1I9CDRg0QPEj1I9CDRg0QPEj1I9CDRg0QPEj1I9CDRg0QPEj1I9CDRg0QPEj1I9CDRg0QPEj1I9CDRg0QPEj1I9CDRg0QPEj1I9CDRg0QPEj1I9CDRg0QPEj1I9CDRg0QPEj1I9CDRg0QPEj1I9CDRg0QPEj1I9CDRg0QPEj1I9CDRg0QPEj1I9CDRg0QPEj1I9CDRg0QPEj1I9CDRg0QPEj1I9CDRg0QPEj1I9CDRg0QPEj1I9CDRg0QPEj1I9CDRg0QPEj1I9CDRg0QPEj1I9CDRg0QPEj1I9CDRg0QPEj1I9CDRg0QPEj1I9CDRg0QPEj1I9CDRg0QPEj1I9CDRg0QPEj1I9CDRg0QPEj1I9CDRg0QPEj1I9CDRg0QPEj1I9CDRg0QPEj1I9CDRg0QPEj1I9CDRg0QPEj1I9CDRg0QPEj1I9CDRg0QPEj1I9CDRg0QPEj1I9CDRg0QPEj1I9CDRg0QPEj1I9CDRg0QPEj1I9CDRg0QPEj1I9CDRg0QPEj1I9CDRg0QPEj1I9CDRg0QPEj1I9CDRg0QPEj1I9CDRg0QPEj1I9CDRg0QPEj1I9CDRg0QPEj1I9CDRg0QPEj1I9CDRg0QPEj1I9CDRg0QPEj1I9CDRg0QPEj1I9CDRg0QPEj1I9CDRg0QPEj1I9CDRg0QPEj1I9CDRg0QPEj1I9CDRg0QPEj1I9CDRg0QPEj1I9CDRg0QPEj1I9CDRg0QP+proj4f/+1+iB4ke9BUv9Qo+G/iT6EGiB4keJHqQ6EGiB4keJHqQ6EGiB4keJHqQ6EGiB4keJHqQ6EGiB4keJHqQ6EGiB4keJHqQ6EGiB4keJHqQ6EH56Dt82RAg+tkQIPrZECD62RAg+tkQIPrZECD62RAg+tkQIPrZECD62RAg+tkQIPrZECD62RAg+tkQIPrZECD62RAg+tkQIPrZECD62RAg+tkQIPrZECD62RAg+tkQIPrZECD62RAg+tkQIPrZECD62RAg+tkQIPrZECD62RAg+tkQIPrZECD62RAg+tkQIPrZECD62RAg+tkQIPrZECD62RAg+tkQIPrZECD62RAg+tkQIPrZECD62RAg+tkQIPrZECD62RAg+tkQIPrZECD62RAg+tkQIPrZECD62RAg+tkQIPrZECD62RAg+tkQIPrZECD62RAg+tkQIPrZECD62RAg+tkQIPrZECD62RAg+tkQIPrZECD62RAg+tkQIPrZECD62RAg+tkQIPrZECD62RAg+tkQIPrZECD62RAg+tkQIPrZECD62RAg+tkQIPrZECD62RAg+tkQIPrZECD62RAg+tkQIPrZECD62RAg+tkQIPrZECD62RAg+tkQIPrZECD62RAg+tkQIPrZECD62RAg+tkQIPrZECD62RAg+tkQkI/+6+3DDyX6y9uHH0r0l7cPP5ToQaIHiR70Nc+k+P+JHiR6kOhBXipI9CDRg0QPEj1I9CDRg0QPEj1I9CDRg0QPEj1I9CDRg0QPEj1I9CDRg0QPEj1I9CDRg0QPEj1I9CDRg0QPEj1I9CDRg0QPEj1I9CDRg0QPEj1I9CDRg0QPEj1I9CDRg0QPEj1I9CDRg0QPEj1I9CDRg0QPEj1I9CDRg0QPEj1I9CDRg0QPEj1I9CDRg0QPEj1I9CDRg0QPEj1I9CDRg0QPEj1I9CDRg0QPEj1I9CDRg0QPEj1I9CDRg0QPEj1I9CDRg0QPEj1I9CDRg0QPEj1I9CDRg0QPEj1I9CDRg0QPEj1I9CDRg0QPEj1I9CDRg0QPEj1I9Jzn8weF4aCCMegc1gAAAABJRU5ErkJggg==",
            name: "legs_2",
            position: 1
        },
        mouths: {
            data: "iVBORw0KGgoAAAANSUhEUgAAAfQAAAKDCAYAAADsGfhuAAAABGdBTUEAALGPC/xhBQAAAAlwSFlzAAAWJAAAFiQBmxXGFAAAABh0RVh0U29mdHdhcmUAcGFpbnQubmV0IDQuMS4xYyqcSwAABd1JREFUeF7t3TFKw2AYx+HeQXDplqHgIC45Qo/QMfEGji4FIefoIXIMT+DiDeLsAeIbaEorHTS1trw8D/zWfOOfD0IyAwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAuEZ30WvUXbi3CACY6D56j/oL9xEBABMZdABIwKADQAJHB321WvVVVZ2toigOzosMOgCc4Oigd13Xn1Nd1wfnRQYdAE5g0AEgAYMOAAkYdABIwKADQAIGHQASMOgAkIBBB4AEDDoAJHAbPUXNfuv1+rNpmn6sbdvtFP/eZrPZPWdsuVy23858jgCAPzb80nR3gx4+1zpVWZb7N/GxOgIAzsygA0ACBh0AEjDoAJDAQ1SOLRaLl2GYpzSfzx/3n7XtJgIA/lkVHbtp/6RhwAGAK2DQASABgw4ACRh0AEigiIY306fkBTgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMhvNvsCnx08/A9jLqAAAAAASUVORK5CYII=",
            name: "mouth_6",
            position: 1
        },
        eyes: {
            data: "iVBORw0KGgoAAAANSUhEUgAAAfQAAAKDCAYAAADsGfhuAAAABGdBTUEAALGPC/xhBQAAAAlwSFlzAAAWJAAAFiQBmxXGFAAAABh0RVh0U29mdHdhcmUAcGFpbnQubmV0IDQuMS4xYyqcSwAABk1JREFUeF7t3KGOGkEcx3FsTVVFFU1qSN1hGiQCC0+A7QMUWYOqRqAx8AKHrCGVNbzEyXuJ7Z8cucxMtgeXlKY7+XySr9rdGfkLhh4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAf9eH6O5Ct/A2arsr7U0EAFxhGzUXuoVp1HZX2jACAK5g0AGgAgYdACpg0AGgg7LR3G63zSXlN9Eseq1D9HzGdDo9n/5nw+EwvfPULgIAQjaSBh0AuikbSYMOAN2UjaRBB4D/3/voPi00aYvFopnNZi9WfjOZTH4V536PSunz+9Vq9ZiesV6vW+9K22w22b3L5fKhPDcCgOp9jLJfuaX5fJ49b6t0GtvinZ9RKXvncDicv36y3++z520dj8fz2092u13bewBQPYMOABUw6ABQAYMOABUw6ABQAYMOABUw6ABQAYMOAJXKBtE/xQFAN2UjadABoJuykTToANBN2UgadADopnHaaDT6MR6Pm5cqv4neRa91Fz2fMRgMvrXdldbv97+k30SfIgCgxTYqfwmX3cI0arsrbRgBAFcw6ABQAYMOABX4Gu0vdAufo7a70k5/jAMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD8K73eb4L/+3JNBPK0AAAAAElFTkSuQmCC",
            name: "eyes_0",
            position: 1
        }
    },
    currentCharacterId: '',
    allCharacters:[]
};

const charactersReducer = (state = INITIAL_STATE, action) =>  {
    const newCharacter = addDefaultCharacter(state.defaultCharacter, action.payload)

    switch(action.type) {
        case CharactersTypes.SET_CURRENT_CHARACTER:
            return {
                ...state,
                currentCharacterId: action.payload
            }
        case CharactersTypes.ADD_CHARACTER:
            return {
                ...state,
                allCharacters: addCharacter(state.allCharacters, newCharacter),
                currentCharacterId: addCurrentCharacter(state.allCharacters, newCharacter.id, state.currentCharacterId)
            };
        case CharactersTypes.GET_DEFAULT_CHARACTER:
            return {
                ...state,
                currentCharacterId: newCharacter.id,
                allCharacters: addCharacter(state.allCharacters, newCharacter),
            };
        case CharactersTypes.DELETE_CHARACTER:
            return {
                ...state,
                allCharacters: removeCharacter(state.allCharacters, action.payload),
                currentCharacterId: setPreviousCharacter(state.allCharacters, state.currentCharacterId)
            };
        case CharactersTypes.RESET_CHARACTER:
            return {
                ...state,
                allCharacters: replaceCharacter(state.allCharacters, newCharacter, state.currentCharacterId),
                currentCharacterId: newCharacter.id
            };
        case CharactersTypes.UPDATE_CHARACTER:
            return {
                ...state,
                allCharacters: updateCharacter(state.allCharacters, action.payload, state.currentCharacterId)
            };
        
        default: 
            return state
            
    }
}

export default charactersReducer;