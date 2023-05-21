export default function isCheck(states, turn) {
    const king = states.find(el => el.piece && el.piece.startsWith(`king_${turn}`))
    const noTurn = turn === 'white' ? 'black' : 'white'
    let result = false
    let x = 0, y = 0
    let finder = king

    /* verify if any top piece put the king at check */

    while (finder) {
        const current = states.find(el => el.x === king.x && el.y === king.y - (y + 1))
        finder = current

        if (!current) break

        if (current.piece) {

            if (current.piece.endsWith(turn)) break

            if (current.piece.startsWith('pawn')) {
                break
            }
            else if (current.piece.startsWith('bishop')) {
                break
            }
            else if (current.piece.startsWith('knight')) {
                break
            }
            else if (current.piece.startsWith('rook')) {
                result = !result
                break
            }
            else if (current.piece.startsWith('queen')) {
                result = !result
                break
            }
            else /* king */ {
                if (king.y - current.y === 1) {
                    result = !result
                    break
                }
            }

        }

        y++
    }

    /* verify if any down piece put the king at check */
    y = 0
    x = 0
    finder = king

    while (finder) {
        const current = states.find(el => el.x === king.x && el.y === king.y + (y + 1))
        finder = current

        if (!current) break

        if (current.piece) {

            if (current.piece.endsWith(turn)) break

            if (current.piece.startsWith('pawn')) {
                break
            }
            else if (current.piece.startsWith('bishop')) {
                break
            }
            else if (current.piece.startsWith('knight')) {
                break
            }
            else if (current.piece.startsWith('rook')) {
                result = true
                break
            }
            else if (current.piece.startsWith('queen')) {
                result = true
                break
            }
            else /* king */ {
                if (king.y - current.y === 1) {
                    result = true
                    break
                }
            }

        }

        y++
    }

    /* verify if any left piece put the king at check */
    y = 0
    x = 0
    finder = king

    while (finder) {
        const current = states.find(el => el.x === king.x - (x + 1) && el.y === king.y)
        finder = current

        if (!current) break

        if (current.piece) {

            if (current.piece.endsWith(turn)) break

            if (current.piece.startsWith('pawn')) {
                break
            }
            else if (current.piece.startsWith('bishop')) {
                break
            }
            else if (current.piece.startsWith('knight')) {
                break
            }
            else if (current.piece.startsWith('rook')) {
                result = true
                break
            }
            else if (current.piece.startsWith('queen')) {
                result = true
                break
            }
            else /* king */ {
                if (king.y - current.y === 1) {
                    result = true
                    break
                }
            }

        }

        x++
    }

    /* verify if any right piece put the king at check */
    y = 0
    x = 0
    finder = king

    while (finder) {
        const current = states.find(el => el.x === king.x + (x + 1) && el.y === king.y)
        finder = current

        if (!current) break

        if (current.piece) {

            if (current.piece.endsWith(turn)) break

            if (current.piece.startsWith('pawn')) {
                break
            }
            else if (current.piece.startsWith('bishop')) {
                result = true
                break
            }
            else if (current.piece.startsWith('knight')) {
                break
            }
            else if (current.piece.startsWith('rook')) {
                result = true
                break
            }
            else if (current.piece.startsWith('queen')) {
                result = true
                break
            }
            else /* king */ {
                if (king.y - current.y === 1) {
                    result = true
                    break
                }
            }

        }

        x++
    }

    /* verify if any left top piece put the king at check */
    y = 0
    x = 0
    finder = king

    while (finder) {
        const current = states.find(el => el.x === king.x - (x + 1) && el.y === king.y - (y + 1))
        finder = current

        if (!current) break

        if (current.piece) {

            if (current.piece.endsWith(turn)) break

            if (current.piece.startsWith('pawn')) {
                break
            }
            else if (current.piece.startsWith('bishop')) {
                result = true
                break
            }
            else if (current.piece.startsWith('knight')) {
                break
            }
            else if (current.piece.startsWith('rook')) {
                result = true
                break
            }
            else if (current.piece.startsWith('queen')) {
                result = true
                break
            }
            else /* king */ {
                if (king.y - current.y === 1) {
                    result = true
                    break
                }
            }

        }

        x++
        y++
    }

    /* verify if any right top piece put the king at check */
    y = 0
    x = 0
    finder = king

    while (finder) {
        const current = states.find(el => el.x === king.x + (x + 1) && el.y === king.y - (y + 1))
        finder = current

        if (!current) break

        if (current.piece) {

            if (current.piece.endsWith(turn)) break

            if (current.piece.startsWith('pawn')) {
                break
            }
            else if (current.piece.startsWith('bishop')) {
                result = true
                break
            }
            else if (current.piece.startsWith('knight')) {
                break
            }
            else if (current.piece.startsWith('rook')) {
                result = true
                break
            }
            else if (current.piece.startsWith('queen')) {
                result = true
                break
            }
            else /* king */ {
                if (king.y - current.y === 1) {
                    result = true
                    break
                }
            }

        }

        x++
        y++
    }

    /* verify if any left bottom piece put the king at check */
    y = 0
    x = 0
    finder = king

    while (finder) {
        const current = states.find(el => el.x === king.x - (x + 1) && el.y === king.y + (y + 1))
        finder = current

        if (!current) break

        if (current.piece) {

            if (current.piece.endsWith(turn)) break

            if (current.piece.startsWith('pawn')) {
                break
            }
            else if (current.piece.startsWith('bishop')) {
                result = !result
                break
            }
            else if (current.piece.startsWith('knight')) {
                break
            }
            else if (current.piece.startsWith('rook')) {
                result = true
                break
            }
            else if (current.piece.startsWith('queen')) {
                result = true
                break
            }
            else /* king */ {
                if (king.y - current.y === 1) {
                    result = true
                    break
                }
            }

        }

        x++
        y++
    }

    /* verify if any right bottom piece put the king at check */
    y = 0
    x = 0
    finder = king

    while (finder) {
        const current = states.find(el => el.x === king.x + (x + 1) && el.y === king.y + (y + 1))
        finder = current

        if (!current) break

        if (current.piece) {

            if (current.piece.endsWith(turn)) break

            if (current.piece.startsWith('pawn')) {
                break
            }
            else if (current.piece.startsWith('bishop')) {
                result = true
                break
            }
            else if (current.piece.startsWith('knight')) {
                break
            }
            else if (current.piece.startsWith('rook')) {
                result = true
                break
            }
            else if (current.piece.startsWith('queen')) {
                result = true
                break
            }
            else /* king */ {
                if (king.y - current.y === 1) {
                    result = true
                    break
                }
            }

        }

        x++
        y++
    }

    /* check if knight control case */
    const topLeft = states.find(el => el.x === king.x - 1 && el.y === king.y - 2)
    const topRight = states.find(el => el.x === king.x + 1 && el.y === king.y - 2)

    const middleTopLeft = states.find(el => el.x === king.x - 2 && el.y === king.y - 1)
    const middleTopRight = states.find(el => el.x === king.x + 2 && el.y === king.y - 1)

    const middleDownLeft = states.find(el => el.x === king.x - 2 && el.y === king.y + 1)
    const middleDownRight = states.find(el => el.x === king.x + 2 && el.y === king.y + 1)

    const downLeft = states.find(el => el.x === king.x - 1 && el.y === king.y + 2)
    const downRight = states.find(el => el.x === king.x + 1 && el.y === king.y + 2)

    const moves = [topLeft, topRight, middleTopLeft, middleTopRight, middleDownLeft, middleDownRight, downLeft, downRight]

    for (const move of moves) {

        if (move && move.piece === `knight_${noTurn}`) {
            result = true
            break
        }

    }

    /* pawn check */

    if (turn === 'white') {

        const diagLeft = states.find(el => el.x === king.x - 1 && el.y === king.y - 1)
        const diagRight = states.find(el => el.x === king.x + 1 && el.y === king.y - 1)

        if (diagLeft && diagLeft.piece === `pawn_${noTurn}`) {
            result = true
        }

        if (diagRight && diagRight.piece === `pawn_${noTurn}`) {
            result = true
        }

    }
    else {

        const diagLeft = states.find(el => el.x === king.x - 1 && el.y === king.y + 1)
        const diagRight = states.find(el => el.x === king.x + 1 && el.y === king.y + 1)

        if (diagLeft && diagLeft.piece === `pawn_${noTurn}`) {
            result = true
        }

        if (diagRight && diagRight.piece === `pawn_${noTurn}`) {
            result = true
        }

    }

    return result
}