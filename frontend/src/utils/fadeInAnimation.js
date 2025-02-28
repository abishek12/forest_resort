import { delay } from "framer-motion"

export const fadeInAnimationVariantsContent = {
    initial: {
        opacity: 0,
        y: 100
    },
    animate: {
        opacity: 1,
        y: 0,
        transition: {
            delay: 0.1
        }
    }
}

export const fadeInAnimationVariantsImg = {
        initial: {
            opacity: 0,
            y: 100
        },
        animate: {
            opacity: 1,
            y: 0,
            transition: {
                delay: 0.2
            }
        }
    }

export const fadeInCards = {
        initial: {
          opacity: 0,
          y: 100
        },
        animate: (id) => ({
          opacity: 1,
          y: 0,
          transition: {
            delay: 0.2 * id,
          }
        })
      }