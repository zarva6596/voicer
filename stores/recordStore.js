import { defineStore } from 'pinia'
import { random } from '@/utils'

export const useRecordStore = defineStore({
  id: 'recordState',
  state: () => ({
    records: [
      { id: random(), caption: '', comments: [] },
    ],
  }),
  actions: {
    changeCaption(id, val) {
      this.records = this.records.map((item) => item.id === id ? { ...item, caption: val } : { ...item })
    },
    addRecord() {
      this.records.push({ id: random(), caption: '', comments: [] })
    },
    addNewComment(id) {
      this.records.find((item) => item.id === id)?.comments.push({ id: random(), data: '' })
    },
    changeComment(data, id, commentId) {
      const comment = this.records.find(item => item.id === id)
        ?.comments.find(item => item.id === commentId)
      if (comment) comment.data = data
    }
  },
})
