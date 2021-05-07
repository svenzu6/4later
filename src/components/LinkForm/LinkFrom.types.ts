export type LinkFormType = {
    title: string
    description: string
    url: string
}

export type LinkFormProps = {
    actions: React.ReactNode
    value?: LinkFormType
    onSubmit(formValues: LinkFormType): void
    onCancel(): void
}