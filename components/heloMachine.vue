<template>
    <div>
        <h1>hello {{ message }}</h1>
        <q-btn color="primary" label="Primary" />
    </div>
</template>

<script>
export default{
    name: 'test',
    props:{
        message: {
            type: String,
            default: 'pangea'
        }
    }
}
</script>