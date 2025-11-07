
export default  {
    name:'imageUpload',
    title:'Image Upload',
    type:'document',
    fields: [
        {
        name:'title',
        type:'string',
        title:'Title'
    },
    {
        name:'backgroundColour',
        type:'color',
        title:'Background Colour' ,
    },
    {
        name:'textColour',
        type:'color',
        title:'Text Colour' ,
    },
    {
        name:'image',
        type:'image',
        title:'Image',
        options:{
            hotspot:true
        }
    }
    ]
    
    }