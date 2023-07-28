export const useAddCount = (limit) => {
    console.log(limit)
    const count = ref(0)

    // const time = setInterval(() => {
    //     count.value++
    // }, 10)

    const addCount = () => {}

    return {
        count,
        addCount,
    }
}
