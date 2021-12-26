export function testCode() {
  try {
    throw 'hey Mama'
  } catch (e) {
    console.error(e)
  }
}
