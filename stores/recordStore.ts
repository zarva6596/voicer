import { defineStore } from 'pinia'
import { random } from '@/utils'

export type AudioRecording = {
  id: string
  caption: string
  comments: { id: string; data: string }[]
  fire?: boolean
}

export const useRecordStore = defineStore({
  id: 'recordState',
  state: () => ({
    records: [
      { id: random(), caption: '', comments: [] },
    ] as Array<AudioRecording>,
  }),
  actions: {
    changeCaption(id: string, val: string) {
      const record = this.records.find((item) => item.id === id)
      if (record) record.caption = val
    },
    addRecord() {
      this.records.push({ id: random(), caption: '', comments: [] })
    },
    addNewComment(id: string) {
      this.records
        .find((item) => item.id === id)
        ?.comments.push({ id: random(), data: '' })
    },
    changeComment(data: string, id: string, commentId: string) {
      const comment = this.records
        .find((item) => item.id === id)
        ?.comments.find((item) => item.id === commentId)
      if (comment) comment.data = data
    },
    addFire(id: string) {
      const record = this.records.find((item) => item.id === id)
      if (record) record.fire = true
    },
  },
})
