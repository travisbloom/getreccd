export interface UseSectionsProps<SectionKey extends string> {
  sections: SectionKey[]
  initialSectionId?: SectionKey | (() => SectionKey)
}

export interface UseSectionsReturn<TabKey extends string = string> {
  currentSection: TabKey
  goToSection: (tabId: TabKey) => void
  onSectionNotFound: () => void
  goBackSection: () => void
}
