import { Tabs, TabsContent, TabsList, TabsTrigger } from "~/components/ui/tabs"

export default function TabsPage() {
  return (
    <main className="p-6">
      <h1>Tabs</h1>
      <section>
        <Tabs defaultValue="b" className="w-full">
          <TabsList>
            <TabsTrigger value="a">Lorem 1</TabsTrigger>
            <TabsTrigger value="b">Lorem 2</TabsTrigger>
            <TabsTrigger value="c">Lorem 3</TabsTrigger>
          </TabsList>

          <TabsContent value="a">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Unde
            architecto et dicta harum, eligendi tenetur dolorem saepe ipsam
            sequi praesentium quae autem quaerat sit enim inventore obcaecati
            nobis, perferendis veritatis.
          </TabsContent>

          <TabsContent value="b">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Accusantium animi dolorem qui deleniti! Iste quibusdam debitis
            voluptas! Possimus sint numquam laudantium, quibusdam molestias, rem
            omnis natus dolores blanditiis voluptates facilis.
          </TabsContent>

          <TabsContent value="c">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ea itaque
            necessitatibus reprehenderit veniam sunt earum facilis quod
            blanditiis corrupti at autem consequatur placeat, accusantium amet
            cum corporis suscipit cumque ullam!
          </TabsContent>
        </Tabs>
      </section>
    </main>
  )
}
