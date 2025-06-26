import tap from 'tap'

import { add } from '@/lib/add'

tap.test('Should 2 + 2 = 4', async (t) => {
  // ARRANGE
  const A = 2
  const B = 2

  // ACT
  const result = add(A, B)

  // ASSERT
  t.equal(result, 4)
  t.end()
})
