//src/mixins/pagetitle.js
function getTitle (vm) {
    //console.log("vm.$options",vm.$options)
    const { pagetitle } = vm.$options
    if (pagetitle) {
        return typeof pagetitle === 'function'
        ? pagetitle.call(vm)
        : pagetitle
    }
}//getTitle()

const serverTitleMixin = {
    created () {
        const pagetitle = getTitle(this)
        if (pagetitle) {
            this.$ssrContext.pagetitle = `Vue HN 2.0 | ${pagetitle}`
        }
    }
}//serverTitleMixin

const clientTitleMixin = {
    mounted () {
        const pagetitle = getTitle(this)
        if (pagetitle) {
            document.title = `Eduardo A.F. | ${pagetitle}`
        }
    }
}//clientTitleMixin

export default process.env.VUE_ENV === 'server'
? serverTitleMixin
: clientTitleMixin